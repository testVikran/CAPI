/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QsrClaimDate', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    logId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'log_id'
    },
    claimDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'claim_date'
    }
  }, {
    tableName: 'qsr_claim_date'
  });
};
