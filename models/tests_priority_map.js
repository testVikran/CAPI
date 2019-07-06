/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testsPriorityMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    testId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'test_id'
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'priority'
    }
  }, {
    tableName: 'tests_priority_map'
  });
};
