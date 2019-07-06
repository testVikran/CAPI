/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labCredentials', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'medical_lab',
        key: 'id'
      },
      field: 'lab_id'
    },
    userName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'user_name'
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'password'
    }
  }, {
    tableName: 'lab_credentials'
  });
};
