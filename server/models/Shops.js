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
      type: DataTypes.STRING,
      // type: DataTypes.ENUM('Spare Part Seller', 'Service Center'),
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regApproval:{
    type: DataTypes.BOOLEAN,
    default: false,
    allowNUll: true,
 
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
