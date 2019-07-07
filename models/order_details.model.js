/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderDetails', {
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
      references: {
        model: 'orders',
        key: 'id'
      },
      field: 'order_id'
    },
    labTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tests_labs_map',
        key: 'id'
      },
      field: 'lab_test_id'
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1',
      field: 'quantity'
    },
    orderType: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'order_type'
    },
    collectionDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'collection_date'
    },
    collectionSlot: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'collection_slot'
    },
    reportUrl: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'report_url'
    },
    mtProfit: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'mt_profit'
    },
    displayPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'display_price'
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'price'
    }
  }, {
    tableName: 'order_details'
  });
};
