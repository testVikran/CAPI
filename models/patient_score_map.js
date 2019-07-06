/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patientScoreMap', {
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
      references: {
        model: 'patient',
        key: 'id'
      },
      field: 'patient_id'
    },
    absHealthScore: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'abs_health_score'
    },
    relHealthScore: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'rel_health_score'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_date'
    }
  }, {
    tableName: 'patient_score_map'
  });
};
