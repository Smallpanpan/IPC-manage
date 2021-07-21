module.exports = app =>{
    const server = app.model.import('../domain/server_list');
    return server;
}
