module.exports = (sequelize, DataTypes) => {
  const Shops = sequelize.define('Shops', {
    shopName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // shopAddress: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    serviceType: {
      type: DataTypes.ENUM('Spare Part Seller', 'Service Center'),
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Shops.associate = (models) => {
    Shops.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'cascade',
    });

    Shops.hasMany(models.Mechanics, {
      foreignKey: 'shopId',
      onDelete: 'cascade',
    });

    Shops.hasMany(models.ShopItems, {
      foreignKey: 'shopId',
      onDelete: 'cascade',
    });
  };

  return Shops;
};
