/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LabFunctionMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'lab_id'
    },
    labType: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'lab_type'
    }
  }, {
    tableName: 'lab_function_map'
  });
};
