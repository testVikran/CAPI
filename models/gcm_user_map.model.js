/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GcmUserMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    gcmRegistrationId: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'gcm_registration_id'
    },
    userId: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'user_id'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_date'
    }
  }, {
    tableName: 'gcm_user_map'
  });
};
