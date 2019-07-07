/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QsrInvoicePanel', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    companyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'company_id'
    },
    proxy: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'proxy'
    },
    label: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'label'
    },
    contact: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'contact'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'address'
    },
    gst: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gst'
    },
    published: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'published'
    }
  }, {
    tableName: 'qsr_invoice_panel'
  });
};
