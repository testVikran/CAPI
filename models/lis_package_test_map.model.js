/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LisPackageTestMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    lisId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'lis_id'
    },
    medicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'medical_test_id'
    },
    packageId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'package_id'
    }
  }, {
    tableName: 'lis_package_test_map'
  });
};
