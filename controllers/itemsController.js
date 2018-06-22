'use strict';
const JWT = require('jsonwebtoken');

const models = require('../models');

exports.createItem = (req, h) => {
  const itemInfo = {
    image: "http://demo.webulous.in/restaurant/wp-content/uploads/sites/5/2014/06/chennaicitypage_03art1_gt819dhqj119nxg_p3_meals.jpg",
    name: req.payload.name,
    price: req.payload.price,
    quantity: req.payload.quantity,
    category: req.payload.category,
    source: req.payload.source
  };
  return models.Item.create(itemInfo).then((itemInfo) => {
    return { message: "Item created successfully", item: itemInfo };
  }).catch((err) => {
    return { err: err };
  });
}

exports.getItem = (req, h) => {
    console.log(req.headers.authorization)
  return models.Item.findAll({
    // where: {
    //   id: req.params.id
    // }
  }).then((itemData) => {
    return { message: "Success", user: itemData };
  })
  .catch((err) => {
    return { error: err };
  });
}