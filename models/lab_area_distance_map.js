/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labAreaDistanceMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    labAddressId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'lab_address_id'
    },
    labName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'lab_name'
    },
    labLat: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'lab_lat'
    },
    labLon: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'lab_lon'
    },
    areaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'area_id'
    },
    areaName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'area_name'
    },
    areaLat: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'area_lat'
    },
    areaLon: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'area_lon'
    },
    distance: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'distance'
    }
  }, {
    tableName: 'lab_area_distance_map'
  });
};
