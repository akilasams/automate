module.exports = (sequelize, DataTypes) => {
  const ShopItems = sequelize.define('ShopItems', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.ENUM('new','used'),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM('Accessories','Air Condition Parts', 'Alloy Wheels', 'Audio/Video/Sound Systems', 'Batteries', 'Beading and Rubber Mounts', 'Break System', 'Cables',
      'Electrical Parts', 'Engine', 'Engine Cooling System', 'Exhaust and Silencer', 'External Body Parts', 'Filters', 'Gear box and Transmission system', 'Hose and Clips',
      'Hybrid Parts', 'Interior Body Parts', 'Lamps and Signal Lights', 'Fluid and Lubricants', 'Mirrors and Glasses', 'Nuts and Bolts',
      'Sensors', 'Seats', 'Steering Wheels', 'Switches and controls', 'Tyres and Rims', 'Undercarriage Parts', 'Other'),
      allowNull: false,
    },

    vehicleModel: {
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
    
   photo1: {
    type: DataTypes.BLOB,
    allowNUll: false,
  }
  });

  return ShopItems;
};
