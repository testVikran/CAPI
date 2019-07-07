/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderReviews', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'order_id'
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'type'
    },
    value: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'value'
    },
    params: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'params'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_time'
    },
    rating: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '5',
      field: 'rating'
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'remark'
    }
  }, {
    tableName: 'order_reviews'
  });
};
