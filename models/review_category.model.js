/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReviewCategory', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name'
    },
    slug: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'slug'
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'type'
    }
  }, {
    tableName: 'review_category'
  });
};
