/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderSources', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'name'
    },
    targets: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'targets'
    },
    dailySpend: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'daily_spend'
    },
    avgDailySpend: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'avg_daily_spend'
    }
  }, {
    tableName: 'order_sources'
  });
};
