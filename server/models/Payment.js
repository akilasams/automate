module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unitPrice: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
    },
  });

  return Payment;
};
