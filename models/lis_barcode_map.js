/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lisBarcodeMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    encryptedOrderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'encrypted_order_id'
    },
    barcode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'barcode'
    },
    vialTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'vial_type_id'
    },
    insertionDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'insertion_date'
    },
    lisCenterMapId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lis_center_map_id'
    }
  }, {
    tableName: 'lis_barcode_map'
  });
};
