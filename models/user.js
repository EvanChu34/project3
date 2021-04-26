const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
 
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", User => {
    User.password = bcrypt.hashSync(
      User.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
