/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lisTestDetailsParametersMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    lisTestDetailsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'lis_test_details_id'
    },
    parametersId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'parameters_id'
    }
  }, {
    tableName: 'lis_test_details_parameters_map'
  });
};
