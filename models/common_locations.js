/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commonLocations', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    locationAreaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'location_area_id'
    },
    cityId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'city_id'
    }
  }, {
    tableName: 'common_locations'
  });
};
