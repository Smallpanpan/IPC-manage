/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('server_list', {
      id: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      serverType: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      serverName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      ipconfig: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      userName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      port: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      dbPort: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      snNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      serverSite: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      progress: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      logSite: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      errorSite: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      logName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      errorName: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      typeId: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
    
    }, {
      tableName: 'server_list'
    });
  };
  