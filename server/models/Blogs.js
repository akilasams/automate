module.exports = (sequelize, DataTypes) => {
  const Blogs = sequelize.define('Blogs', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Blogs;
};
