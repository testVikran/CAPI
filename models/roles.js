/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    roleName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'role_name'
    },
    isActive: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1',
      field: 'isActive'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    }
  }, {
    tableName: 'roles'
  });
};
