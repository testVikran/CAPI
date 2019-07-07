/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Phlebotomist', {
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
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'address'
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'phone'
    },
    age: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      field: 'age'
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'sex'
    },
    isActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'is_active'
    },
    role: {
      type: DataTypes.STRING(11),
      allowNull: true,
      field: 'role'
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'dob'
    },
    cityId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'city_id'
    },
    registrationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'registration_date'
    },
    capacityPerHour: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '2',
      field: 'capacity_per_hour'
    },
    empId: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'emp_id'
    }
  }, {
    tableName: 'phlebotomist'
  });
};
