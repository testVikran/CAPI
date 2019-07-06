/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testParametersReferenceRangeMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    paramId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'param_id'
    },
    low: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'low'
    },
    high: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'high'
    },
    multiplier: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'multiplier'
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'type'
    },
    unit: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'unit'
    }
  }, {
    tableName: 'test_parameters_reference_range_map'
  });
};
