/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holidays', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'name'
    }
  }, {
    tableName: 'holidays'
  });
};
