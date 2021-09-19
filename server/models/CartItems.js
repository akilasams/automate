module.exports = (sequelize, DataTypes) => {
  const CartItems = sequelize.define('CartItems', {
    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unitPrice: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return CartItems;
};
