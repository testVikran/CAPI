/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lifestyleSuggestionFeedback', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'order_id'
    },
    msshId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'mssh_id'
    },
    isActive: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      field: 'is_active'
    }
  }, {
    tableName: 'lifestyle_suggestion_feedback'
  });
};
