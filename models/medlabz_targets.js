/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medlabzTargets', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    month: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'month'
    },
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'year'
    },
    orderPerDay: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'order_per_day'
    }
  }, {
    tableName: 'medlabz_targets'
  });
};
