module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
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

  User.associate = (models) => {
    User.hasMany(models.Order, {
      onDelete: 'cascade',
    });

    User.hasMany(models.Blog, {
      onDelete: 'cascade',
    });

    User.hasMany(models.Complaint, {
      onDelete: 'cascade',
    });

    User.hasMany(models.ShopItem, {
      onDelete: 'cascade',
    });
  };

  return User;
};
