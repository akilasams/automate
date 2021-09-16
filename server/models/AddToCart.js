module.exports = (sequelize, DataTypes) => {
    const AddToCart = sequelize.define('AddToCart', {
     
      item: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
    });
  
    return AddToCart;
  };
  