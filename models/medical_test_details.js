/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medicalTestDetails', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    whyGetTested: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'why_get_tested'
    },
    whenGetTested: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'when_get_tested'
    },
    preparation: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'preparation'
    },
    specimen: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'specimen'
    },
    testDuration: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'test_duration'
    },
    testType: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'test_type'
    },
    fastingRequired: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'fasting_required'
    },
    published: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'published'
    },
    isVisibleOnClient: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'is_visible_on_client'
    }
  }, {
    tableName: 'medical_test_details'
  });
};
