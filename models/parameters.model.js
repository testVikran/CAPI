/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Parameters', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'name'
    },
    defaultUnit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'default_unit'
    }
  }, {
    tableName: 'parameters'
  });
};
