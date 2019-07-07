/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PackageProfilesMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    packageMedicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'medical_test_details',
        key: 'id'
      },
      field: 'package_medical_test_id'
    },
    profileMedicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'medical_test_details',
        key: 'id'
      },
      field: 'profile_medical_test_id'
    }
  }, {
    tableName: 'package_profiles_map'
  });
};
