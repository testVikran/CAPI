/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labRatings', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'lab_id'
    },
    patientId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'patient_id'
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'order_id'
    },
    rating: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'rating'
    }
  }, {
    tableName: 'lab_ratings'
  });
};
