/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CampaignManager', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: '',
      field: 'name'
    },
    campaignId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'campaign_id'
    },
    slug: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: '',
      field: 'slug'
    }
  }, {
    tableName: 'campaign_manager'
  });
};
