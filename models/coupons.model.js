/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Coupons', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'name'
    },
    discount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'discount'
    },
    discountType: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'abs',
      field: 'discount_type'
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'expiry_date'
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'type'
    },
    size: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0',
      field: 'size'
    },
    hasMultiUsage: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'has_multi_usage'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'user_id'
    }
  }, {
    tableName: 'coupons'
  });
};
