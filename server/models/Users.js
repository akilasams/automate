module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userRole: {
      type: DataTypes.ENUM('Admin', 'Customer', 'Shop'),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Orders, {
      foreignKey: 'userId',
      onDelete: 'cascade',
    });

    Users.hasMany(models.Blogs, {
      foreignKey: 'userId',
      onDelete: 'cascade',
    });

    Users.hasMany(models.Complaints, {
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
    
  };

  return Users;
};
