module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('OrderItems');

  OrderItems.associate = (models) => {
    OrderItems.belongsTo(models.ShopItems, {
      onDelete: 'cascade',
    });
  };

  return OrderItems;
};
