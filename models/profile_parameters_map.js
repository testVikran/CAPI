/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profileParametersMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    labTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'lab_test_id'
    },
    medicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'medical_test_id'
    },
    paramId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'param_id'
    }
  }, {
    tableName: 'profile_parameters_map'
  });
};
