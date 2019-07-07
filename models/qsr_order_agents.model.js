/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QsrOrderAgents', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'name'
    },
    addDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'add_date'
    }
  }, {
    tableName: 'qsr_order_agents'
  });
};
