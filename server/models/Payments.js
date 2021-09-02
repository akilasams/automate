module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unitPrice: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
    },
  });

  return Payments;
};
