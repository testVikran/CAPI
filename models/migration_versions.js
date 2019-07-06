/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migrationVersions', {
    version: {
      type: DataTypes.STRING(14),
      allowNull: false,
      primaryKey: true,
      field: 'version'
    },
    executedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'executed_at'
    }
  }, {
    tableName: 'migration_versions'
  });
};
