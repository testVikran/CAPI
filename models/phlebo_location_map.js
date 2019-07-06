/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phleboLocationMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
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
    phleboId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'phlebo_id'
    }
  }, {
    tableName: 'phlebo_location_map'
  });
};
