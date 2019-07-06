/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faqs', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'title'
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'desc'
    },
    videoUrl: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'video_url'
    },
    tags: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'tags'
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'type'
    }
  }, {
    tableName: 'faqs'
  });
};
