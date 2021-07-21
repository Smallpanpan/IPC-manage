/**
 *  主页Controller
 * @param app
 * @returns {logsController}
 */
module.exports = app => {
    return class logsController extends app.Controller {
        // 查询日志
        /**
         *
         *
         * @param {*} ctx {}
         */
        async getLogs(ctx) {
            const {id,type} = ctx.request.body;
            let {logSite,logName,ipconfig,port,userName,password,errSite,errorName} = await ctx.service.server.findOne({id});
            const params = {
                host: ipconfig,
                username: userName,
                port,
                password
            };
            if(type == 'error'){
                logSite = errSite;
                logName = errorName;
            }
            const client = await ctx.service.ssh.createClient(params);
            if(client.status){
                const cmd = `cd ${logSite}&&tail -f -n 50 ${logName}`;
                let data = await ctx.service.ssh.getDate(client.conn,cmd) + '';
                ctx.success('查询成功！',data);
            }else{
                ctx.failure('连接失败'+ client.conn);
            }

        }
        async log(ctx) {
            console.log('连接请求');
            const params = {
                host: '120.76.135.231',
                port: 18032,
                username: 'root',
                password: 'U0HmWOca@@mwliT"S+zf'
            };
            const client = await ctx.service.ssh.createClient(params);
            const cmd1 = "cd node/logs/&&tail -f -n 50 app-log.log";
            let data;
            try{
                 data = await ctx.service.ssh.getDate(client,cmd1) + '';
            }catch(err){
                console.log('err',err);
            }
            ctx.body = data;
            console.log('getDate:',data);
        }


    };
};