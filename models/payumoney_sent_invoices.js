/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payumoneySentInvoices', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'order_id'
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'type'
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'url'
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'amount'
    },
    extraOrderIds: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'extra_order_ids'
    }
  }, {
    tableName: 'payumoney_sent_invoices'
  });
};
