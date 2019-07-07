/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Campaigns', {
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
    imageUrl: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'image_url'
    },
    ctaUrl: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'cta_url'
    },
    isActive: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1',
      field: 'is_active'
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_time'
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'end_time'
    }
  }, {
    tableName: 'campaigns'
  });
};
