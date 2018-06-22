'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    category: DataTypes.STRING,
    source: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};