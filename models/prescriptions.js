/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prescriptions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    prescriptionHandle: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'prescription_handle'
    },
    uploadDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'upload_date'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'message'
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'phone'
    }
  }, {
    tableName: 'prescriptions'
  });
};
