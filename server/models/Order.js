module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    amount: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
    },
  });

  Order.associate = (models) => {
    Order.hasMany(models.OrderItem, {
      onDelete: 'cascade',
    });

    Order.hasOne(models.Payment);
  };

  return Order;
};
