/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    parentUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'registered_user',
        key: 'id'
      },
      field: 'parent_user_id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email'
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'age'
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'sex'
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'phone'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'address'
    },
    otherRequests: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'other_requests'
    },
    isPrimary: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'is_primary'
    },
    isPhoneVerified: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'is_phone_verified'
    },
    imgHandle: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'img_handle'
    },
    altPhone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'alt_phone'
    }
  }, {
    tableName: 'patient'
  });
};
