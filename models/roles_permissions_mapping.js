/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolesPermissionsMapping', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'role_id'
    },
    permissionId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'permission_id'
    },
    insertionDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'insertion_date'
    }
  }, {
    tableName: 'roles_permissions_mapping'
  });
};
