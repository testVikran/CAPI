/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
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
      unique: true,
      field: 'name'
    },
    longitude: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'longitude'
    },
    latitude: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'latitude'
    },
    stateid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'state',
        key: 'id'
      },
      field: 'stateid'
    },
    slug: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'slug'
    },
    isActive: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'isActive'
    }
  }, {
    tableName: 'city'
  });
};
