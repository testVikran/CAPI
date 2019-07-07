/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ThyrocareTestTexts', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    medlabzTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'medlabz_test_id'
    },
    thyrocareTestMarker: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'thyrocare_test_marker'
    },
    vialTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'vial_type_id'
    },
    isPrimaryProduct: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'is_primary_product'
    },
    b2BAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'b2b_amount'
    }
  }, {
    tableName: 'thyrocare_test_texts'
  });
};
