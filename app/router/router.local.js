/**
 * 路由配置
 * @param app
 */
module.exports = app => {
    const {
        io
    } = app;
    //--------------------------------------------------
    // 中间件
    //--------------------------------------------------
    const isLoginUser = app.middlewares.isLoginUser();



    //--------------------------------------------------
    // admin管理后台
    //--------------------------------------------------
    app.get('/admin', app.controller.admin.home.index);
    app.post('/admin/login', app.controller.admin.login.login);
    app.post('/admin/logout', app.controller.admin.login.logout);
    //对象统一操作接口
    app.resources('/admin/table', app.controller.admin.table);
    app.get('/admin/user/info', app.controller.admin.user.info);
    app.get('/admin/goods/list', app.controller.admin.goods.list);
    app.get('/admin/goods/:id', app.controller.admin.goods.detail);
    app.post('/admin/goods', app.controller.admin.goods.create);
    app.del('/admin/goods/:id', app.controller.admin.goods.del);
    app.post('/admin/goods/status', app.controller.admin.goods.status);
    app.post('/admin/goods/recommend', app.controller.admin.goods.recommend);
    app.get('/admin/order/list', app.controller.admin.order.list);
    app.post('/admin/order/status', app.controller.admin.order.status);
    app.get('/admin/custom/list', app.controller.admin.user.list);
    app.post('/admin/custom/status', app.controller.admin.user.status);
    app.get('/admin/report', app.controller.admin.report.data);
    app.get('/admin/report/detail', app.controller.admin.report.detail);
    // 主机接口
    app.get('/admin/server/find', app.controller.admin.serverList.findAll);
    app.get('/admin/server/list', app.controller.admin.serverList.list);
    app.post('/admin/server/add', app.controller.admin.serverList.add);
    app.post('/admin/server/edit', app.controller.admin.serverList.edit);
    app.post('/admin/server/del', app.controller.admin.serverList.del);
    app.get('/admin/logs/log', app.controller.admin.logs.log);
    app.post('/admin/logs/getlog', app.controller.admin.logs.getLogs);
    app.get('/admin/server/type', app.controller.admin.serverList.type);

    app.resources('/admin/region', app.controller.admin.region);
    // io
    io.route('openSSH', io.controller.ssh.openSSH);
    io.route('hostname', io.controller.ssh.hostname);
    io.route('cmd', io.controller.ssh.openTest);
    //上传文件
    app.post('/admin/upload/:type', app.controller.file.upload);
    app.get('/file/download/:id', isLoginUser, app.controller.file.download);

    const ueditor = require('egg-ueditor');
    app.all('/admin/ueditor', ueditor());

};