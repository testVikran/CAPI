/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lisVialTypes', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'name'
    },
    lisId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lis_id'
    },
    typeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'type_id'
    }
  }, {
    tableName: 'lis_vial_types'
  });
};
