/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batchProcessLogs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    processName: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'process_name'
    },
    resource: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'resource'
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1',
      field: 'status'
    },
    notification: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0',
      field: 'notification'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    tableName: 'batch_process_logs'
  });
};
