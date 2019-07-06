/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vialTypes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'name'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lab_id'
    },
    typeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'type_id'
    }
  }, {
    tableName: 'vial_types'
  });
};
