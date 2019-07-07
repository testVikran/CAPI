/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestParametersDescription', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    paramId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'param_id'
    },
    level: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'level'
    },
    typicalSymptoms: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'typical_symptoms'
    },
    rareSymptoms: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'rare_symptoms'
    },
    typicalCauses: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'typical_causes'
    },
    rareCauses: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'rare_causes'
    },
    homeRemedies: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'home_remedies'
    },
    specialist: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'specialist'
    },
    diagnostics: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'diagnostics'
    }
  }, {
    tableName: 'test_parameters_description'
  });
};
