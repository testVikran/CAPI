/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profileParameters', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    profileMedicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'medical_test_details',
        key: 'id'
      },
      field: 'profile_medical_test_id'
    },
    parameterMedicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'medical_test_details',
        key: 'id'
      },
      field: 'parameter_medical_test_id'
    }
  }, {
    tableName: 'profile_parameters'
  });
};
