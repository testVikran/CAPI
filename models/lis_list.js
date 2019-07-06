/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lisList', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name'
    },
    clientName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'client_name'
    },
    configTemplate: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'config_template'
    },
    isBarcodeRequired: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'is_barcode_required'
    }
  }, {
    tableName: 'lis_list'
  });
};
