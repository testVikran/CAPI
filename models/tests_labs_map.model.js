/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestsLabsMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    testId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'medical_test_details',
        key: 'id'
      },
      field: 'test_id'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'medical_lab',
        key: 'id'
      },
      field: 'lab_id'
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'price'
    },
    totalDiscount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'total_discount'
    },
    mtDiscountReceived: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'mt_discount_received'
    },
    displayPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'display_price'
    },
    mtProfit: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'mt_profit'
    },
    isCollectionAvailable: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'is_collection_available'
    },
    whenDeliverReport: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'when_deliver_report'
    },
    outsourcedTest: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'outsourced_test'
    },
    bundledTests: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bundled_tests'
    },
    bundledTestsSeg: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'bundled_tests_seg'
    },
    organCovered: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'organ_covered'
    },
    published: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'published'
    },
    testCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'test_code'
    },
    vialTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'vial_type_id'
    }
  }, {
    tableName: 'tests_labs_map'
  });
};
