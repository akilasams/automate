module.exports = (sequelize, DataTypes) => {
  const Mechanics = sequelize.define('Mechanics', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Mechanics;
};
