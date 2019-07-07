/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestParamMsshMap', {
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
    level: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'level'
    },
    msshTermId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'mssh_term_id'
    },
    tfidfScore: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      field: 'tfidf_score'
    }
  }, {
    tableName: 'test_param_mssh_map'
  });
};
