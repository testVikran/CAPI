/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QsrStores', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    storeId: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'store_id'
    },
    companyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'company_id'
    },
    zone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'zone'
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'city'
    },
    address: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'address'
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'phone'
    },
    storeHead: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'store_head'
    },
    labsAvailable: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'labs_available'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email'
    },
    storeName: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'store_name'
    },
    invoicePanelId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'invoice_panel_id'
    },
    expiryMonths: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'expiry_months'
    },
    agentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'agent_id'
    },
    storeHeadMobile: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'store_head_mobile'
    },
    storeAsstHead: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'store_asst_head'
    },
    storeAsstHeadMobile: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'store_asst_head_mobile'
    }
  }, {
    tableName: 'qsr_stores'
  });
};
