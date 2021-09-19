module.exports = (sequelize, DataTypes) => {
  const Carts = sequelize.define('Carts', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Carts.associate = (models) => {
    Carts.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
    Carts.hasMany(models.CartItems, {
      foreignKey: 'cartId',
      onDelete: 'cascade',
    });
  };

  return Carts;
};
