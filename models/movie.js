/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movie', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'title'
    },
    count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'count'
    }
  }, {
    tableName: 'movie'
  });
};
