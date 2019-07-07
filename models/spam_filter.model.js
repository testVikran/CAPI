/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpamFilter', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'phone'
    },
    otpUpdatedTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'otp_updated_time'
    },
    smsUpdatedTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'sms_updated_time'
    },
    otpCount: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'otp_count'
    },
    smsCount: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'sms_count'
    }
  }, {
    tableName: 'spam_filter'
  });
};
