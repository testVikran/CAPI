/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RegisteredUser', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email'
    },
    fbId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fb_id'
    },
    googleId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'google_id'
    },
    mtreeId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'mtree_id'
    },
    fbProfilePicUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fb_profile_pic_url'
    },
    mtreePasswordEncoded: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'mtree_password_encoded'
    },
    registrationTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'registration_time'
    },
    isAppInstalled: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'is_app_installed'
    },
    appInstallTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'app_install_time'
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: '',
      field: 'phone'
    },
    hashToken: {
      type: DataTypes.STRING(80),
      allowNull: true,
      field: 'hash_token'
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'status'
    },
    tokenExpiry: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'token_expiry'
    }
  }, {
    tableName: 'registered_user'
  });
};
