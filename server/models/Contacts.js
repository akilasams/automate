module.exports = (sequelize, DataTypes) => {
    const Contacts = sequelize.define('Contacts', {
     
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
      }
    });

    Contacts.associate = (models) => {
      Contacts.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: 'cascade',
      });
      Contacts.hasMany(models.ContactItems, {
        foreignKey: 'contactId',
        onDelete: 'cascade',
      });
    };
  
    return Contacts;
  };
  