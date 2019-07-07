/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReviewCategoryMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    categoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'category_id'
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'name'
    },
    value: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'value'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'active'
    }
  }, {
    tableName: 'review_category_map'
  });
};
