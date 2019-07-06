/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    serialNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'serial_number'
    },
    year: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'year'
    },
    labGstId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lab_gst_id'
    },
    invoiceNo: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'invoice_no'
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'status'
    },
    invoiceDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'invoice_date'
    }
  }, {
    tableName: 'invoice'
  });
};
