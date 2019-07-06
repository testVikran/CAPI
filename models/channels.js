/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('channels', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    channelName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'channel_name'
    },
    desc: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'desc'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'active'
    },
    imgName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'img_name'
    }
  }, {
    tableName: 'channels'
  });
};
