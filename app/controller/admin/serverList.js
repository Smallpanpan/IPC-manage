/**
 *  主页Controller
 * @param app
 * @returns {serverController}
 */
const moment=require('moment')
module.exports = app => {
    return class serverController extends app.Controller {
        // 查询类表
        async list(ctx){
            const result = await ctx.service.server.find(ctx.query);
            ctx.success("查询成功!",result.rows,result.count);
        }
        // 查询全部工控机
        async findAll(ctx){
            const list = await ctx.service.server.findAllList();
            ctx.success('查询成功！',list);
        }
        // 新增工控机列表
        async add(ctx){
            const list = await ctx.service.server.add(ctx.request.body);
            ctx.success('新增成功！');
        }
        // 删除工控机列表
        async del(ctx){
            console.log('ctx.request.body',ctx.request.body);
            const list = await ctx.service.server.delList(ctx.request.body);
            ctx.success('刪除成功！',list);
        }
        // 编辑工控机列表
        async edit(ctx){
            const list = await ctx.service.server.edit(ctx.request.body);
            ctx.success('修改成功！',list);
        }
        // 查询工控机列表
        async type(ctx){
            const list = await ctx.service.server.findType();
            ctx.success('查询成功!',list)
        }
       
    };
};