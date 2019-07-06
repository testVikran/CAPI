/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medicalTestNames', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    medicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'medical_test_details',
        key: 'id'
      },
      field: 'medical_test_id'
    },
    testName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      field: 'test_name'
    },
    isPrimary: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'is_primary'
    },
    testCategoryId: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'medical_test_category',
        key: 'id'
      },
      field: 'test_category_id'
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      field: 'slug'
    }
  }, {
    tableName: 'medical_test_names'
  });
};
