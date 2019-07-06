/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bodyParts', {
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    }
  }, {
    tableName: 'body_parts'
  });
};
