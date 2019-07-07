/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderCommunication', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    encryptedOrderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'encrypted_order_id'
    },
    patientConf: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'patient_conf'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_date'
    }
  }, {
    tableName: 'order_communication'
  });
};
