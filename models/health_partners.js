/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('healthPartners', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'name'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'address'
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'phone'
    },
    rating: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'rating'
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'email'
    },
    imageHandle: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'image_handle'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_created'
    }
  }, {
    tableName: 'health_partners'
  });
};
