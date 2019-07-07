/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LisTestDetails', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    lisId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'lis_id'
    },
    medicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'medical_test_id'
    },
    vialId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'vial_id'
    },
    testCode: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'test_code'
    }
  }, {
    tableName: 'lis_test_details'
  });
};
