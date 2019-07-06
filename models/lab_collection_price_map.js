/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labCollectionPriceMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
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
      defaultValue: '0',
      field: 'price'
    }
  }, {
    tableName: 'lab_collection_price_map'
  });
};
