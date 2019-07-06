/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('msshTerms', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    term: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'term'
    },
    tags: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'tags'
    },
    meshTerm: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'mesh_term'
    }
  }, {
    tableName: 'mssh_terms'
  });
};
