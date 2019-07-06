/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partnerLeads', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    partnerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'partner_id'
    },
    patientId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'patient_id'
    },
    packageId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'package_id'
    },
    leadToken: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'lead_token'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_created'
    }
  }, {
    tableName: 'partner_leads'
  });
};
