/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userReferralCodeMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'user_id'
    },
    code: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'code'
    },
    shareCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'share_count'
    },
    registerCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'register_count'
    },
    redeemCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'redeem_count'
    }
  }, {
    tableName: 'user_referral_code_map'
  });
};
