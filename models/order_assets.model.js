/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderAssets', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    encryptedOrderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'encrypted_order_id'
    },
    asset: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'asset'
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'type'
    }
  }, {
    tableName: 'order_assets'
  });
};
