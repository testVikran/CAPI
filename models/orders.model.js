/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    sessionId: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'session_id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'user_id'
    },
    patientId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'patient_id'
    },
    orderStatus: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'order_status'
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_created'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'address'
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'phone'
    },
    paymentMode: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'payment_mode'
    },
    hasPaid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'has_paid'
    },
    orderTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'order_time'
    },
    paymentTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'payment_time'
    },
    orderCode: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'order_code'
    },
    encryptedId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'encrypted_id'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'medical_lab',
        key: 'id'
      },
      field: 'lab_id'
    },
    phleboId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'phlebotomist',
        key: 'id'
      },
      field: 'phlebo_id'
    },
    prescribedBy: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'prescribed_by'
    },
    reportsDelivered: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0',
      field: 'reports_delivered'
    },
    pincode: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'pincode'
    },
    couponCodeId: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'coupon_code_id'
    },
    labAddressId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'lab_address_map',
        key: 'id'
      },
      field: 'lab_address_id'
    },
    collectionPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'collection_price'
    },
    collectionDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'collection_date'
    },
    collectionSlot: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'collection_slot'
    },
    source: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'source'
    },
    appliedDiscount: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '0',
      field: 'applied_discount'
    },
    processingStatus: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'processing_status'
    },
    instruction: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'instruction'
    },
    phleboRemarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'phlebo_remarks'
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'lat'
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'lng'
    },
    courierReq: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'courier_req'
    },
    isVisited: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'is_visited'
    },
    visitedTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'visited_time'
    },
    isCrawled: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'is_crawled'
    },
    labRemarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'lab_remarks'
    },
    lisCreated: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'lis_created'
    },
    invoiceId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'invoice_id'
    },
    reportsDeliveredDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'reports_delivered_date'
    },
    lisCenterMapId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lis_center_map_id'
    },
    patientConf: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'patient_conf'
    },
    cdrNumber: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'cdr_number'
    },
    partnerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'partner_id'
    },
    altPhone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'alt_phone'
    },
    lisOrderId: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'lis_order_id'
    }
  }, {
    tableName: 'orders'
  });
};
