/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qsrCompany', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'name'
    },
    hqAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'hq_address'
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'phone'
    },
    logoHandle: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'logo_handle'
    }
  }, {
    tableName: 'qsr_company'
  });
};
