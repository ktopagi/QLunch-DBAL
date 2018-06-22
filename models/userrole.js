'use strict';
module.exports = (sequelize, DataTypes) => {
  var userRole = sequelize.define('userRole', {
    role: DataTypes.STRING
  }, {});
  userRole.associate = function(models) {
    // associations can be defined here
  };
  return userRole;
};