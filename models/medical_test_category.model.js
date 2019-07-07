/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MedicalTestCategory', {
    id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    testCategoryName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'test_category_name'
    }
  }, {
    tableName: 'medical_test_category'
  });
};
