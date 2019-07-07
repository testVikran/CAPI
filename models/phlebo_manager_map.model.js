/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PhleboManagerMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    seniorPhleboId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'senior_phlebo_id'
    },
    phleboId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'phlebo_id'
    }
  }, {
    tableName: 'phlebo_manager_map'
  });
};
