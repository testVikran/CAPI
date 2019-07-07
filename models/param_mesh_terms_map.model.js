/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ParamMeshTermsMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    paramId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'param_id'
    },
    meshTerm: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'mesh_term'
    }
  }, {
    tableName: 'param_mesh_terms_map'
  });
};
