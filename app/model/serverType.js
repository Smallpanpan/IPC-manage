module.exports = app =>{
    const serverType = app.model.import('../domain/server_type');
    return serverType;
}
