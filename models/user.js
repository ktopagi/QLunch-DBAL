'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    contact_number: DataTypes.INTEGER,
    account_status: DataTypes.BOOLEAN,
    auth_token: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.prototype.validatePassword = function (password) {
    console.log(bcrypt.compareSync(password, this.password));
    return bcrypt.compareSync(password, this.password);
  }
  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    })
    .catch(err => {
      throw new Error();
    });
  });
  return User;
};