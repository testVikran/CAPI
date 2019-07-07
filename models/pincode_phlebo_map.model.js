/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PincodePhleboMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    pincode: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'pincode'
    },
    phleboId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'phlebo_id'
    }
  }, {
    tableName: 'pincode_phlebo_map'
  });
};
