/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaymentModes', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    mode: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'mode'
    }
  }, {
    tableName: 'payment_modes'
  });
};
