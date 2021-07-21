module.exports = ()=>{
    return async (ctx,next)=>{
        console.log('-----------------------filter--------------------------')
        console.log("receive packet",ctx.packet);
        await next();
        // ctx.socket.emit('res','packet--' + ctx.packet);
        console.log('packet response!');
    }
}