/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PatientBfaMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    patientId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'patient_id'
    },
    encryptedOrderId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'encrypted_order_id'
    },
    height: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'height'
    },
    subBody: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sub_body'
    },
    subTrunk: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sub_trunk'
    },
    subArms: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sub_arms'
    },
    subLegs: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sub_legs'
    },
    skeBody: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ske_body'
    },
    skeTrunk: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ske_trunk'
    },
    skeArms: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ske_arms'
    },
    skeLegs: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ske_legs'
    },
    weight: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'weight'
    },
    totalFat: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'total_fat'
    },
    visceralFat: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'visceral_fat'
    },
    restingMeta: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'resting_meta'
    },
    bmi: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'bmi'
    },
    bodyAge: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'body_age'
    },
    bp: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'bp'
    },
    pulse: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'pulse'
    }
  }, {
    tableName: 'patient_bfa_map'
  });
};
