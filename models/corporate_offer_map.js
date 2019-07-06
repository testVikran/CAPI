/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('corporateOfferMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    corporateId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'corporate',
        key: 'id'
      },
      field: 'corporate_id'
    },
    offerPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'offer_price'
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'type'
    },
    testLabId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'test_lab_id'
    },
    cityId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'city_id'
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'desc'
    },
    label: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'label'
    },
    preText: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'pre_text'
    }
  }, {
    tableName: 'corporate_offer_map'
  });
};
