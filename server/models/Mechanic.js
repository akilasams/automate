module.exports = (sequelize, DataTypes) => {
  const Mechanic = sequelize.define('Mechanic', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Mechanic;
};
