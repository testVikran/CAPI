/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labGstInfo', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    cityId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'city_id'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lab_id'
    },
    gstNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'gst_number'
    },
    slug: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'slug'
    },
    hsnCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'hsn_code'
    }
  }, {
    tableName: 'lab_gst_info'
  });
};
