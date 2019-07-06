/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderTransactions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    orderEncryptedId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'order_encrypted_id'
    },
    paymentMode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'payment_mode'
    },
    paymentStatus: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'payment_status'
    },
    transactionId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'transaction_id'
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'amount'
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'reason'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'payment_date'
    },
    paymentUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'payment_url'
    }
  }, {
    tableName: 'order_transactions'
  });
};
