module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem');

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.ShopItem, {
      onDelete: 'cascade',
    });
  };

  return OrderItem;
};
