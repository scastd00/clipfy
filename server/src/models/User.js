const bcrypt = require('bcrypt');

function hashPassword(user) {
  const SALT_FACTOR = 8;

  if (!user.changed('password')) {
    return;
  }

  return bcrypt
    .hash(user.password, SALT_FACTOR)
    .then(hash => {
      user.setDataValue('password', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeSave: hashPassword
    }
  });

  User.prototype.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
