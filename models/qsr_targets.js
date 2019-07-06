/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qsrTargets', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    companyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'company_id'
    },
    month: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'month'
    },
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'year'
    },
    ordersTarget: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'orders_target'
    },
    salesTarget: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sales_target'
    }
  }, {
    tableName: 'qsr_targets'
  });
};
