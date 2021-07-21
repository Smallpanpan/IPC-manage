module.exports=()=>{
    return async (ctx,next)=>{
        console.log("socket auth....websocket连接");
        ctx.socket.emit('socket response-----');
        await next();
        // 删除存储的ssh语句柄
        if(ctx.app.client){
            let index;
            for(let i in ctx.app.client){
                if(ctx.app.client[i].id == ctx.socket.conn.id){
                    index = i
                }
            }
            if(index){
                ctx.app.client.splice(index,1);
            }
        }
        console.log('disconnect!');
    }
}