/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QsrCheckups', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    candidateId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'candidate_id'
    },
    storeId: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'store_id'
    },
    checkupStatus: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'checkup_status'
    },
    checkupDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'checkup_date'
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'order_id'
    },
    selectionStatus: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'selection_status'
    },
    requestedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'requested_date'
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'update_date'
    },
    panelId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'panel_id'
    },
    testingSlot: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'testing_slot'
    },
    isNewCheckup: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'is_new_checkup'
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'comments'
    },
    isFit: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'is_fit'
    },
    smsCounter: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sms_counter'
    },
    isApproved: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'is_approved'
    },
    labInternalOrderId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'lab_internal_order_id'
    },
    renewalCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'renewal_count'
    },
    isRenewal: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'is_renewal'
    },
    processStatusId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'process_status_id'
    },
    fitnessDesc: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fitness_desc'
    },
    approvalDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'approval_date'
    }
  }, {
    tableName: 'qsr_checkups'
  });
};
