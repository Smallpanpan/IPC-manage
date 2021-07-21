const Controller = require('egg').Controller;
class ssh extends Controller {
    async receive() {
        const {
            ctx,
            app
        } = this;
        await ctx.socket.emit('res', "hello");
    };
    async openSSH() {
        const {
            ctx,
            app
        } = this;
        let self = this;
        let params;
        const result = await ctx.service.server.findOne({
            id: ctx.packet[1].id
        });
        if (result) {
             params = {
                host: result.ipconfig,
                port: result.port,
                username: result.userName,
                password: result.password
            };
        } else {
            self.ctx.socket.emit("res", '主机信息不存在' );
            return;
        }

        const client = await ctx.service.ssh.createClient(params);
        if (client.status) {
            if (!ctx.app.client) {
                ctx.app.client = [];
            }
            ctx.app.client.push({
                id: ctx.socket.conn.id,
                client: client.conn
            });
            await self.ctx.socket.emit("res", "连接成功");
        } else {
            self.ctx.socket.emit("res", '连接失败' + client.conn);
        }
    }

    async openTest() {
        const {
            ctx
        } = this;
        console.log('this is openTest');

        console.log("receive packet", ctx.packet[1]);
        const cmd = ctx.packet[1];
        const client = ctx.app.client.filter(item => item.id == ctx.socket.conn.id)[0].client;
        let res = await this.service.ssh.getDates(client, cmd);

        ctx.socket.emit('res', res);
    }
}

module.exports = ssh;