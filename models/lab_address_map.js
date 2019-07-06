/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labAddressMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
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
    pincodeId: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'location_areas',
        key: 'id'
      },
      field: 'pincode_id'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'address'
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
    isPrimary: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'is_primary'
    }
  }, {
    tableName: 'lab_address_map'
  });
};
