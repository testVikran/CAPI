/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('corporateScoreMap', {
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
    absHealthScore: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'abs_health_score'
    },
    relHealthScore: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'rel_health_score'
    },
    diabScore: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'diab_score'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_date'
    },
    avgRealAge: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'avg_real_age'
    },
    avgBodyAge: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'avg_body_age'
    },
    mostFitPatientId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'patient',
        key: 'id'
      },
      field: 'most_fit_patient_id'
    }
  }, {
    tableName: 'corporate_score_map'
  });
};
