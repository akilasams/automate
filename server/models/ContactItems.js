module.exports = (sequelize, DataTypes) => {
    const ContactItems = sequelize.define('ContactItems', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          message: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          contactId:{
            type: DataTypes.INTEGER,
            allowNull: false,
          }
    });
  
    return ContactItems;
  };