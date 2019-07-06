/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('analyzerLabsMap', {
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
      field: 'lab_id'
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'status'
    },
    algo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'algo'
    }
  }, {
    tableName: 'analyzer_labs_map'
  });
};
