/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('corporate', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name'
    },
    domain: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'domain'
    },
    contactPhone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'contact_phone'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'address'
    },
    pincodeId: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'pincode_id'
    },
    contactEmail: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'contact_email'
    },
    imgHandle: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'img_handle'
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'password'
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'status'
    }
  }, {
    tableName: 'corporate'
  });
};
