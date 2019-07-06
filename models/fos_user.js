/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fosUser', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    username: {
      type: DataTypes.STRING(180),
      allowNull: false,
      field: 'username'
    },
    usernameCanonical: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: true,
      field: 'username_canonical'
    },
    email: {
      type: DataTypes.STRING(180),
      allowNull: false,
      field: 'email'
    },
    emailCanonical: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: true,
      field: 'email_canonical'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'name'
    },
    mobileNo: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'mobile_no'
    },
    enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'enabled'
    },
    salt: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'salt'
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'password'
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_login'
    },
    locked: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'locked'
    },
    expired: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'expired'
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'expires_at'
    },
    confirmationToken: {
      type: DataTypes.STRING(180),
      allowNull: true,
      field: 'confirmation_token'
    },
    passwordRequestedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'password_requested_at'
    },
    roles: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'roles'
    },
    credentialsExpired: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'credentials_expired'
    },
    credentialsExpireAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'credentials_expire_at'
    }
  }, {
    tableName: 'fos_user'
  });
};
