/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phleboOrderStatusLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    encryptedOrderId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'encrypted_order_id'
    },
    phleboId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'phlebo_id'
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: 'SCHEDULED',
      field: 'status'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_time'
    },
    cash: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'cash'
    },
    asset: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'asset'
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'remarks'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'active'
    },
    pod: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'pod'
    },
    orderType: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: 'b2c',
      field: 'order_type'
    },
    checkupId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'checkup_id'
    },
    agentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'agent_id'
    },
    testIds: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'test_ids'
    },
    orderStatusId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'order_status_id'
    },
    isApproved: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0',
      field: 'is_approved'
    },
    vendorName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'vendor_name'
    },
    activityDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'activity_date'
    },
    displayPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'display_price'
    },
    reasonId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'reason_id'
    }
  }, {
    tableName: 'phlebo_order_status_log'
  });
};
