/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lisCenterMap', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    lisId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lis_id'
    },
    centerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'center_id'
    },
    username: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'username'
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'password'
    },
    centerName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'center_name'
    }
  }, {
    tableName: 'lis_center_map'
  });
};
