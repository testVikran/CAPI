/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appOffers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'Id'
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'title'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'active'
    },
    worth: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'worth'
    },
    page: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'page'
    },
    imgHandle: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'img_handle'
    },
    couponCode: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'coupon_code'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'expiry_date'
    },
    couponCodeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'coupons',
        key: 'id'
      },
      field: 'coupon_code_id'
    }
  }, {
    tableName: 'app_offers'
  });
};
