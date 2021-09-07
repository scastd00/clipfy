module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Clip', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    clipKey: {
      type: DataTypes.STRING(4),
      unique: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    stock: {
      type: DataTypes.INTEGER(5)
    },

    price: {
      type: DataTypes.DECIMAL(5, 2)
    },

    description: {
      type: DataTypes.STRING
    },

    imageURL: {
      type: DataTypes.STRING
    }
  });
};
