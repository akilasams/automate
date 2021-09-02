module.exports = (sequelize, DataTypes) => {
  const Complaints = sequelize.define('Complaints', {
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Complaints;
};
