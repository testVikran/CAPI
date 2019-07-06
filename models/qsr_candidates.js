/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qsrCandidates', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name'
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gender'
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'age'
    },
    emailId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email_id'
    },
    mobileNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'mobile_number'
    },
    aadharNumber: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'aadhar_number'
    }
  }, {
    tableName: 'qsr_candidates'
  });
};
