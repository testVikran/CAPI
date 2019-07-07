/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PackageCategories', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name'
    },
    slug: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'slug'
    },
    icon: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'icon'
    },
    active: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1',
      field: 'active'
    }
  }, {
    tableName: 'package_categories'
  });
};
