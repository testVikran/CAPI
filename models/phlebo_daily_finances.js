/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phleboDailyFinances', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    phleboId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'phlebo_id'
    },
    datePaid: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_paid'
    },
    cashPaid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'cash_paid'
    },
    previousDues: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'previous_dues'
    },
    previousDateOfClearing: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'previous_date_of_clearing'
    },
    collectedBy: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'collected_by'
    },
    pettyCash: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'petty_cash'
    }
  }, {
    tableName: 'phlebo_daily_finances'
  });
};
