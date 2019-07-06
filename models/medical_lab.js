/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medicalLab', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'name'
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'latitude'
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'longitude'
    },
    isNabl: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'is_nabl'
    },
    accreditation: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'accreditation'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'address'
    },
    mtRating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'mt_rating'
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'website'
    },
    logoImg: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'logo_img'
    },
    city: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'city'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    },
    isDeliveryAvailable: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'is_delivery_available'
    },
    labSize: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lab_size'
    },
    daysOff: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'days_off'
    },
    timings: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'timings'
    },
    pincodeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'location_areas',
        key: 'id'
      },
      field: 'pincode_id'
    },
    backgroundImg: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'background_img'
    },
    isWhiteLabel: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'is_white_label'
    },
    published: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'published'
    },
    gst: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gst'
    },
    centerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'center_id'
    },
    isLisActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'is_lis_active'
    },
    labGstId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lab_gst_id'
    },
    courierCharges: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'courier_charges'
    },
    couponActive: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'coupon_active'
    }
  }, {
    tableName: 'medical_lab'
  });
};
