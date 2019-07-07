/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CampaignManagerTestMap', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    campaignManagerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'campaign_manager_id'
    },
    medicalTestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'medical_test_id'
    }
  }, {
    tableName: 'campaign_manager_test_map'
  });
};
