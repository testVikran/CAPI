/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoleGroups', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      },
      field: 'role_id'
    },
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'groups',
        key: 'id'
      },
      field: 'group_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    }
  }, {
    tableName: 'role_groups'
  });
};
