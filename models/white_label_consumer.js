/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('whiteLabelConsumer', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
      field: 'name'
    },
    apiKey: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
      field: 'api_key'
    },
    consumerName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
      field: 'consumer_name'
    },
    orderCapacityPerSlot: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'order_capacity_per_slot'
    },
    collectionPrice: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'collection_price'
    }
  }, {
    tableName: 'white_label_consumer'
  });
};
