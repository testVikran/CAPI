/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupResourceActionPermissions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
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
    resourceId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'resource_actions',
        key: 'id'
      },
      field: 'resource_id'
    },
    isAllowed: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      field: 'is_allowed'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    }
  }, {
    tableName: 'group_resource_action_permissions'
  });
};
