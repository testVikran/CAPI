/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LocationAreas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'name'
    },
    pincode: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'pincode'
    },
    cityId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'city',
        key: 'id'
      },
      field: 'city_id'
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
      field: 'slug'
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
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1',
      field: 'is_primary'
    }
  }, {
    tableName: 'location_areas'
  });
};
