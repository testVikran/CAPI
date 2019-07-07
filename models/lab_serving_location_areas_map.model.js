/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LabServingLocationAreasMap', {
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
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'location_areas',
        key: 'id'
      },
      field: 'pincode_id'
    },
    isLabVisit: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'is_lab_visit'
    },
    isHomeCollection: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'is_home_collection'
    },
    labAddressId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'lab_address_map',
        key: 'id'
      },
      field: 'lab_address_id'
    }
  }, {
    tableName: 'lab_serving_location_areas_map'
  });
};
