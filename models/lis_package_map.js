/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lisPackageMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    packageTestLabId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'package_test_lab_id'
    },
    testTestLabId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'test_test_lab_id'
    }
  }, {
    tableName: 'lis_package_map'
  });
};
