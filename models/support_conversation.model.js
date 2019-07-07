/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SupportConversation', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'user_id'
    },
    userType: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'user_type'
    },
    userName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'user_name'
    },
    userMobile: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'user_mobile'
    },
    channelId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'channel_id'
    },
    chat: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'chat'
    },
    resolved: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'resolved'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_date'
    }
  }, {
    tableName: 'support_conversation'
  });
};
