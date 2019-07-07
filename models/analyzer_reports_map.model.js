/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AnalyzerReportsMap', {
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
    reportHandle: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'report_handle'
    },
    uploadedTags: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'uploaded_tags'
    },
    uploadedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'uploaded_date'
    },
    isReviewed: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'is_reviewed'
    }
  }, {
    tableName: 'analyzer_reports_map'
  });
};
