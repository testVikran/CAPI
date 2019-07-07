/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CorporateLeads', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    contactName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'contact_name'
    },
    contactEmail: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'contact_email'
    },
    contactPhone: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'contact_phone'
    },
    companyName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'company_name'
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'type'
    },
    applyDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'apply_date'
    }
  }, {
    tableName: 'corporate_leads'
  });
};
