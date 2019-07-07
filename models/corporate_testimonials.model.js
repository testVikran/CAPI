/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CorporateTestimonials', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    corpLabel: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'corp_label'
    },
    imgHandle: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'img_handle'
    },
    testimonial: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'testimonial'
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'type'
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'rating'
    },
    onDisplay: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      field: 'on_display'
    },
    reviewerName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'reviewer_name'
    }
  }, {
    tableName: 'corporate_testimonials'
  });
};
