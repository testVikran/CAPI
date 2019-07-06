/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patientTestResultsMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    patientId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'patient_id'
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'order_id'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_date'
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'value'
    },
    low: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'low'
    },
    high: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'high'
    },
    param: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'param'
    },
    paramId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'param_id'
    },
    insertionDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'insertion_date'
    },
    lisTestDetailsParametersMapId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lis_test_details_parameters_map_id'
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'unit'
    },
    defaultUnit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'default_unit'
    },
    valueDefaultUnit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'value_default_unit'
    },
    lowDefaultUnit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'low_default_unit'
    },
    highDefaultUnit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'high_default_unit'
    }
  }, {
    tableName: 'patient_test_results_map'
  });
};
