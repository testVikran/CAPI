/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserReferralUsageMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    refererUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'referer_user_id'
    },
    refereeUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'referee_user_id'
    },
    couponCodeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'coupon_code_id'
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'type'
    }
  }, {
    tableName: 'user_referral_usage_map'
  });
};
