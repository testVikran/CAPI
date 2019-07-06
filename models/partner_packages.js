/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partnerPackages', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    partnerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'health_partners',
        key: 'id'
      },
      field: 'partner_id'
    },
    packageName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'package_name'
    },
    packageDetails: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'package_details'
    },
    leadCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lead_count'
    },
    packageImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'package_image'
    },
    priceRange: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'price_range'
    },
    duration: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'duration'
    }
  }, {
    tableName: 'partner_packages'
  });
};
