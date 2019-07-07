/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestParameters', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name'
    },
    slug: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'slug'
    },
    paramId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'param_id'
    },
    isPrimary: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'is_primary'
    },
    meshTerm: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'mesh_term'
    },
    defaultUnit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'default_unit'
    }
  }, {
    tableName: 'test_parameters'
  });
};
