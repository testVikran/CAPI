/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qsrTestPanelMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    medicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'medical_test_id'
    },
    qsrCompanyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'qsr_company_id'
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'price'
    },
    displayPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'display_price'
    },
    mtProfit: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'mt_profit'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_created'
    },
    bundledTests: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bundled_tests'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lab_id'
    },
    handle: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'handle'
    },
    published: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'published'
    },
    labDetails: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'lab_details'
    },
    timings: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'timings'
    }
  }, {
    tableName: 'qsr_test_panel_map'
  });
};
