/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProcessStatus', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'status'
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'type'
    },
    step: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1',
      field: 'step'
    },
    onDisplay: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'on_display'
    },
    statusId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'status_id'
    }
  }, {
    tableName: 'process_status'
  });
};
