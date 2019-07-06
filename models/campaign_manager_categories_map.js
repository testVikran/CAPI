/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaignManagerCategoriesMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
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
    campaignManagerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'campaign_manager_id'
    }
  }, {
    tableName: 'campaign_manager_categories_map'
  });
};
