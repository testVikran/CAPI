/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderAgents', {
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
      unique: true,
      field: 'name'
    },
    targets: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'targets'
    },
    salesTargets: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sales_targets'
    },
    orderType: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'order_type'
    },
    isActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'is_active'
    }
  }, {
    tableName: 'order_agents'
  });
};
