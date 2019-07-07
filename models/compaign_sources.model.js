/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompaignSources', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date'
    },
    cpl: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'cpl'
    },
    isActive: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'is_active'
    }
  }, {
    tableName: 'compaign_sources'
  });
};
