/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phinxlog', {
    version: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'version'
    },
    migrationName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'migration_name'
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_time'
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'end_time'
    },
    breakpoint: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'breakpoint'
    }
  }, {
    tableName: 'phinxlog'
  });
};
