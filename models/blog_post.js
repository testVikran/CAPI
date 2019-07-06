/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogPost', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'title'
    },
    highlights: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'highlights'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'content'
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'status'
    },
    authorName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'author_name'
    },
    authorEmail: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'author_email'
    },
    dateAdded: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_added'
    },
    datePublished: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_published'
    },
    viewsCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      field: 'views_count'
    },
    authorImgHandle: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'author_img_handle'
    },
    coverImgHandle: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'cover_img_handle'
    }
  }, {
    tableName: 'blog_post'
  });
};
