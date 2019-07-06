/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaignManagerCategories', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'name'
    },
    slug: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'slug'
    }
  }, {
    tableName: 'campaign_manager_categories'
  });
};
