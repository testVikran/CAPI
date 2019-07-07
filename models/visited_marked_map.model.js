/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VisitedMarkedMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'type'
    },
    currentStatusCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'current_status_code'
    },
    assignedStatusCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'assigned_status_code'
    },
    statusName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'status_name'
    },
    label: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'label'
    }
  }, {
    tableName: 'visited_marked_map'
  });
};
