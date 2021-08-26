module.exports = (sequelize, DataTypes) => {
  const ShopItem = sequelize.define('ShopItem', {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unitPrice: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNUll: false,
    },
    availabitiy: {
      type: DataTypes.BOOLEAN,
      allowNUll: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNUll: true,
    },
    condition: {
      type: DataTypes.STRING,
      allowNUll: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNUll: true,
    },
  });

  return ShopItem;
};
