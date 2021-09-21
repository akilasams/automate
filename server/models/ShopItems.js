module.exports = (sequelize, DataTypes) => {
  const ShopItems = sequelize.define('ShopItems', {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unitPrice: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
    },
    modelNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      // type: DataTypes.ENUM('Brand New', 'Used'),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // category: {
    //   type: DataTypes.ENUM(
    //     'Accessories',
    //     'Air Condition Parts',
    //     'Alloy Wheels',
    //     'Audio/Video/Sound Systems',
    //     'Batteries',
    //     'Beading and Rubber Mounts',
    //     'Brake System',
    //     'Cables',
    //     'Electrical Parts',
    //     'Engine',
    //     'Engine Cooling System',
    //     'Exhaust and Silencer',
    //     'External Body Parts',
    //     'Filters',
    //     'Gear box and Transmission system',
    //     'Hose and Clips',
    //     'Hybrid Parts',
    //     'Interior Body Parts',
    //     'Lamps and Signal Lights',
    //     'Fluid and Lubricants',
    //     'Mirrors and Glasses',
    //     'Nuts and Bolts',
    //     'Sensors',
    //     'Seats',
    //     'Steering Wheels',
    //     'Switches and controls',
    //     'Tyres and Rims',
    //     'Undercarriage Parts',
    //     'Other'
    //   ),
    //   allowNull: false,
    // },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNUll: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shopId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
     approval:{
     type: DataTypes.BOOLEAN,
     default: false,
     allowNUll: true,

    },
  });

  ShopItems.associate = (models) => {
    ShopItems.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
    ShopItems.belongsTo(models.Shops, {
      foreignKey: 'shopId',
      onDelete: 'cascade',
    });
  };

  return ShopItems;
};
