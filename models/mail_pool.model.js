/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MailPool', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email'
    },
    remoteIp: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'remote_ip'
    },
    campaignCode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'campaign_code'
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'feedback'
    }
  }, {
    tableName: 'mail_pool'
  });
};
