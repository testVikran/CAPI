/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderVialsCollectionMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    encryptedOrderId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'encrypted_order_id'
    },
    vialTypesId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'vial_types_id'
    },
    collectionStatusFlag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'collection_status_flag'
    },
    insertionDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'insertion_date'
    }
  }, {
    tableName: 'order_vials_collection_map'
  });
};
