module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Reviews;
};
