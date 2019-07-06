/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profileDefinition', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    medicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'medical_test_details',
        key: 'id'
      },
      field: 'medical_test_id'
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'definition'
    },
    algo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'algo'
    },
    testsFor: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'tests_for'
    }
  }, {
    tableName: 'profile_definition'
  });
};
