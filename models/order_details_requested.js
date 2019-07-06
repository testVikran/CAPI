/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderDetailsRequested', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    encryptedId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'encrypted_id'
    },
    labTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lab_test_id'
    },
    phleboId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'phlebo_id'
    },
    orderStatus: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'order_status'
    },
    reasonId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'reason_id'
    },
    reason: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'reason'
    },
    displayPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'display_price'
    },
    collectionDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'collection_date'
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'status'
    },
    activityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'activity_date'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    action: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '1',
      field: 'action'
    }
  }, {
    tableName: 'order_details_requested'
  });
};
