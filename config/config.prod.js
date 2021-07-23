/**
 * 本地配置
 * @type
 * #sequelize-auto -h localhost -d apstorage -u apstorage -x apstorage
 */
exports.sequelize  = {
    // 单数据库信息配置

    dialect: 'mysql',
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    username: 'ipc',
    // 密码
    password: '3wxehF2AmSbPdADP',
    // 数据库名
    database: 'ipc',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false, // true by default
        freezeTableName: true
    },
    timezone: '+08:00' //东八时区
};
exports.security={
    // domainWhiteList: ['http://localhost:9527'],
    csrf: false
};
