/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('packageCategoryItemsMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'item_id'
    },
    testId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'test_id'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'active'
    },
    label: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'label'
    },
    onDisplay: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'on_display'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lab_id'
    }
  }, {
    tableName: 'package_category_items_map'
  });
};
