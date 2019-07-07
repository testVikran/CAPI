/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ThyrocareBarcodesOrderMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    barcode: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'barcode'
    },
    medlabzOrderId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'medlabz_order_id'
    },
    vialTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'vial_type_id'
    },
    thyrocareBarcodePatientId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'thyrocare_barcode_patient_id'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_created'
    }
  }, {
    tableName: 'thyrocare_barcodes_order_map'
  });
};
