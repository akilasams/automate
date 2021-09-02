module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    amount: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
    },
  });

  Orders.associate = (models) => {
    Orders.hasMany(models.OrderItems, {
      onDelete: 'cascade',
    });

    Orders.hasOne(models.Payments);
  };

  return Orders;
};
