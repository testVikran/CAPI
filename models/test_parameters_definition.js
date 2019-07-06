/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testParametersDefinition', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    paramId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'param_id'
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'definition'
    }
  }, {
    tableName: 'test_parameters_definition'
  });
};
