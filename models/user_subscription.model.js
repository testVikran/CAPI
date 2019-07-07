/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserSubscription', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'user_id'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'status'
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'type'
    },
    applyDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'apply_date'
    }
  }, {
    tableName: 'user_subscription'
  });
};
