/**
 *
 * @type {module:egg.Service}
 */
const {Service} = require('egg');
class serverService extends Service {
    // 查询当前列表
    async find(params) {
        const {ctx} = this;
        let {typeId,serverName,serverSite,page,limit}=params;
            limit=Number(limit) ;
            let offset=(Number(page)-1)*limit ;
            const Op = ctx.model.Op;
            // 查询全部&统计数目
            const result = await ctx.model.Server.findAndCountAll({
                where:{typeId:{[Op.like]: `%${typeId}%`},serverName:{[Op.like]: `%${serverName}%`},serverSite:{[Op.like]: `%${serverSite}%`},
                },offset,limit
            });
            return result
    }
    // 按条件列表查询当前列表
    async findAllList(params){
        const {ctx} = this;
        const result = await ctx.model.Server.findAll({
            where:params,
            order: [['id', 'ASC']],
            raw:true
        });
        return result
    }
    // 按条件列表查询当前列表
    async findOne(params){
        const {ctx} = this;
        const result = await ctx.model.Server.findOne({
            where:params,
            raw:true
        });
        return result
    }
    // 新增列表
    async add(params){
        let {serverName, ipconfig,serverType,typeId,userName,port,password,dbPort,snNumber,serverSite,progress,logSite,errorSite,logName,errorName} = params;
        const {ctx} = this;
        const result = await ctx.model.Server.create({
            serverName, ipconfig,serverType,typeId,userName,port,password,dbPort,snNumber,serverSite,progress,logSite,errorSite,logName,errorName
        });
        return result
    }
    // 更新列表
    async edit(params){
        let {ipconfig,userName,port,password,progress,logSite,logName} = params;
        let {id} = params;
        const {ctx} = this;
        let result;
        let res = await ctx.model.Server.findOne({
            where:{id:id}
        })
        if(res){
             result = res.update(
                {ipconfig,userName,port,password,progress,logSite,logName}
            );
        }
        return result
    }
    // 删除列表
    async delList(params){
        const {ctx} = this;
        const id = params.id;
        let res =  await ctx.model.query("DELETE FROM `server_list` where id = :id", { replacements: { id },type: ctx.model.QueryTypes.DELETE});
        return res;
    }
    async findType(){
        const {ctx} = this;
        let res = await ctx.model.ServerType.findAll({
            where:{},
            raw:true
        })
        return res;
    }
    
}

module.exports = serverService;