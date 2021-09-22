module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('OrderItems', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  OrderItems.associate = (models) => {
    OrderItems.belongsTo(models.ShopItems, {
      onDelete: 'cascade',
    });
  };

  return OrderItems;
};
