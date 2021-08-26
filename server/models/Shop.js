module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    shopName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shopAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceType: {
      type: DataTypes.ENUM('Spare Part Seller', 'Service Center'),
      allowNull: false,
    },
  });

  Shop.associate = (models) => {
    Shop.belongsTo(models.User, {
      onDelete: 'cascade',
    });

    Shop.belongsToMany(models.ShopItem, {
      through: 'ShopAndShopItem',
      onDelete: 'cascade',
    });

    Shop.hasMany(models.Mechanic, {
      onDelete: 'cascade',
    });
  };

  return Shop;
};
