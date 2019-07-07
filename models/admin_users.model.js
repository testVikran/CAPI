/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminUsers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      field: 'email'
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'role_id'
    },
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'group_id'
    },
    parentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'parent_id'
    },
    mtreePasswordEncoded: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'mtree_password_encoded'
    },
    isActive: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'isActive'
    },
    creationTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'creation_time'
    }
  }, {
    tableName: 'admin_users'
  });
};
