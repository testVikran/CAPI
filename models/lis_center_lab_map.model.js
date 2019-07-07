/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LisCenterLabMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    labId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'medical_lab',
        key: 'id'
      },
      field: 'lab_id'
    },
    lisCenterId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'lis_center_id'
    },
    isPrimary: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'is_primary'
    }
  }, {
    tableName: 'lis_center_lab_map'
  });
};
