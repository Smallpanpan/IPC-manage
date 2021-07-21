/**
 * 插件配置
 * @type
 */
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
};
exports.cors = {
    enable: true,
    package: 'egg-cors',
};
exports.lru = {
    enable: true,
    package: 'egg-lru',
};
exports.io = {
    enable: true,
    package: 'egg-socket.io',
}
/*
exports.validate = {
    package: 'egg-validate',
};*/

// cors 跨域设置
//   exports.cors = {
//     enable: false,
//     package: 'egg-cors',
// };