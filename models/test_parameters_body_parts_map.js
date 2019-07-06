/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testParametersBodyPartsMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    paramId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'param_id'
    },
    bodyPartId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'body_part_id'
    }
  }, {
    tableName: 'test_parameters_body_parts_map'
  });
};
