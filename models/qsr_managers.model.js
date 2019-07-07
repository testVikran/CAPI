/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QsrManagers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    qsrCompanyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'qsr_company_id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name'
    },
    userName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'user_name'
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'password'
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'MANAGER',
      field: 'role'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_created'
    },
    zone: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'zone'
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'city'
    },
    store: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'store'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'active'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email'
    },
    orderEmailer: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'order_emailer'
    },
    reportsEmailer: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'reports_emailer'
    },
    summaryEmailer: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'summary_emailer'
    },
    dashboard: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'dashboard'
    },
    fitnessEmailer: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'fitness_emailer'
    }
  }, {
    tableName: 'qsr_managers'
  });
};
