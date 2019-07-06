/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permissions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    permissionName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'permission_name'
    },
    parentPermissionId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'parent_permission_id'
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'url'
    },
    isMenu: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'isMenu'
    },
    isActive: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'isActive'
    },
    insertionDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'insertion_date'
    }
  }, {
    tableName: 'permissions'
  });
};
