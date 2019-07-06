/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qsrCandidateMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    patientId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'patient_id'
    },
    uId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'u_id'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_date'
    },
    pincode: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'pincode'
    },
    companyEmployeeId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'company_employee_id'
    },
    isActive: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1',
      field: 'is_active'
    },
    joiningDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'joining_date'
    },
    currentStoreId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'current_store_id'
    },
    isInsurance: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'unsure',
      field: 'is_insurance'
    }
  }, {
    tableName: 'qsr_candidate_map'
  });
};
