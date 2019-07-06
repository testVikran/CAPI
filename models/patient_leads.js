/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patientLeads', {
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
      field: 'name'
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'phone'
    },
    source: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'source'
    },
    tests: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'tests'
    },
    applyDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'apply_date'
    },
    interestedPeopleCount: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'interested_people_count'
    },
    agentId: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'agent_id'
    },
    referer: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'referer'
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'email'
    },
    telephonyId: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'telephony_id'
    },
    compaignSourceId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'compaign_source_id'
    }
  }, {
    tableName: 'patient_leads'
  });
};
