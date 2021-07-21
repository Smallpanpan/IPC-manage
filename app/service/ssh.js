'use strict';
const Client = require('ssh2').Client;
const Service = require('egg').Service;
class SSHService extends Service {
  /**
     * 创建SSH连接会话
     * @param {String} ip 远程服务ip地址
     * @param {Number} port ssh服务端口
     * @param {String} username 远程服务器用户名
     * @param {String} password 远程服务用户名密码
     * @return {Object} connection SSH连接句柄
     */
  createClient({ host, port, username, password }) {
    console.log('userinfo:', host, port, username, password);
    let self = this;
    const connection = new Client();
    const options = {host, port, username, password,...this.config.sshConfig};
    return new Promise((resolve, reject) => {
        connection.on('ready', function(err) {
            console.log('Client :: ready',err);
            resolve({status:true,conn:connection});
        }).connect(options);
        connection.on('error', (err) => {
            console.log('error',err);
            resolve({status:false,conn:err});
        });
    });
  }

    /**
     *
     *获取ssh操作返回数据（执行命令后断开连接）/只执行一次
     * @param {*} client 客户端对象
     * @param {*} cmd 命令行
     * @return {*}  返回字符串
     * @memberof SSHService
     */
    getDate(client,cmd){
      return new Promise((resolve, reject) => {
          client.exec(cmd, async (err, stream) => {
              if (err) {
                  reject(err);
              }
             await stream.on('close', async (code, signal) => {
                  client.end();
              }).on('data', (data) => {
                resolve(data)
              }).stderr.on('data', async (data) => {
                  console.log('STDERR: ' + data);
              });
          });
      });
  }
        /**
     *
     *获取ssh操作返回数据(连接不断开)
     * @param {*} client 客户端对象
     * @param {*} cmd 命令行
     * @return {*}  返回字符串
     * @memberof SSHService
     */
    getDates(client,cmd){
        return new Promise((resolve, reject) => {
            client.exec(cmd, async (err, stream) => {
                if (err) {
                    reject(err);
                }
               await stream.on('close', async (code, signal) => {
                    // client.end();
                }).on('data', (data) => {
                  resolve(data)
                }).stderr.on('data', async (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        });
    }
}



module.exports = SSHService;