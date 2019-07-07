/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LabContacts', {
    id: {
      type: DataTypes.INTEGER(11),
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'name'
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'email'
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'phone'
    },
    orderOfContact: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'order_of_contact'
    }
  }, {
    tableName: 'lab_contacts'
  });
};
