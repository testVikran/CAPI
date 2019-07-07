/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PatientProfilingMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
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
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_time'
    },
    futureDiagnostics: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'future_diagnostics'
    },
    possibleDiseases: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'possible_diseases'
    },
    doctorRecommendation: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'doctor_recommendation'
    },
    isPossibleChronic: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'is_possible_chronic'
    },
    isPriceSensitive: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'is_price_sensitive'
    },
    reminderTime: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'reminder_time'
    }
  }, {
    tableName: 'patient_profiling_map'
  });
};
