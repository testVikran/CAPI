/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CorporateUserMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    corporateId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'corporate',
        key: 'id'
      },
      field: 'corporate_id'
    },
    patientId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'patient_id'
    },
    employeeCode: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'employee_code'
    }
  }, {
    tableName: 'corporate_user_map'
  });
};
