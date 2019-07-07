/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DoctorConsultantLabTestMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    testLabId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'test_lab_id'
    },
    docConsultId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'doc_consult_id'
    }
  }, {
    tableName: 'doctor_consultant_lab_test_map'
  });
};
