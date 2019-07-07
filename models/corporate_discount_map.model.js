/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CorporateDiscountMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    corporateId: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'corporate_id'
    },
    discountPercentageMinSlab: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'discount_percentage_min_slab'
    },
    discountPercentageMaxSlab: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'discount_percentage_max_slab'
    },
    addedPercentageDiscount: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'added_percentage_discount'
    },
    couponId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'coupon_id'
    }
  }, {
    tableName: 'corporate_discount_map'
  });
};
