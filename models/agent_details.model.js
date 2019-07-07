/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AgentDetails', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    agentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'agent_id'
    },
    agentEmail: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'agent_email'
    },
    agentPhone: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'agent_phone'
    },
    agentTimings: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'agent_timings'
    }
  }, {
    tableName: 'agent_details'
  });
};
