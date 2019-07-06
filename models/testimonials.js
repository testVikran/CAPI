/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testimonials', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    patientId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'patient',
        key: 'id'
      },
      field: 'patient_id'
    },
    testimonial: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'testimonial'
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '5',
      field: 'rating'
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'type'
    },
    onDisplay: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'on_display'
    }
  }, {
    tableName: 'testimonials'
  });
};
