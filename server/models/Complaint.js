module.exports = (sequelize, DataTypes) => {
  const Complaint = sequelize.define('Complaint', {
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
  return Complaint;
};
