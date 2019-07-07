/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserCoupons', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    couponCodeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'coupon_code_id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'user_id'
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'PENDING',
      field: 'status'
    }
  }, {
    tableName: 'user_coupons'
  });
};
