/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medDocLeads', {
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
    mobile: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'mobile'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email'
    },
    tests: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'tests'
    }
  }, {
    tableName: 'med_doc_leads'
  });
};
