/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lisActionMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    lisId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lis_id'
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'url'
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'type'
    },
    typeKey: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'type_key'
    }
  }, {
    tableName: 'lis_action_map'
  });
};
