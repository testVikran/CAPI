/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderReportsMap', {
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
      references: {
        model: 'orders',
        key: 'id'
      },
      field: 'order_id'
    },
    reportHandle: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'report_handle'
    },
    uploadedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'uploaded_date'
    },
    uploadedFor: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'uploaded_for'
    },
    analyzed: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'analyzed'
    },
    analyzedEmailer: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '2',
      field: 'analyzed_emailer'
    },
    courierStatus: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'courier_status'
    },
    analyzedSmartReport: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'analyzed_smart_report'
    }
  }, {
    tableName: 'order_reports_map'
  });
};
