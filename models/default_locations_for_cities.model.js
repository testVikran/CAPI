/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DefaultLocationsForCities', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    cityId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true,
      field: 'city_id'
    },
    locationAreaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'location_area_id'
    }
  }, {
    tableName: 'default_locations_for_cities'
  });
};
