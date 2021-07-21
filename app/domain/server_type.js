/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('server_type', {
      id: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      serverName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      typeId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      typeCode: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
    
    }, {
      tableName: 'server_type'
    });
  };
  