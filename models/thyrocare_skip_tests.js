/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thyrocareSkipTests', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    medlabzTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'medlabz_test_id'
    }
  }, {
    tableName: 'thyrocare_skip_tests'
  });
};
