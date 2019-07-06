/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('whiteLabelConsumersTestsMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    whiteLabelConsumerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'white_label_consumer',
        key: 'id'
      },
      field: 'white_label_consumer_id'
    },
    medicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'medical_test_details',
        key: 'id'
      },
      field: 'medical_test_id'
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'price'
    },
    mtDisplayPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'mt_display_price'
    },
    consumerPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'consumer_price'
    },
    appliedDiscount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'applied_discount'
    }
  }, {
    tableName: 'white_label_consumers_tests_map'
  });
};
