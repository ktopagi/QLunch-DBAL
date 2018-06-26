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
  return models.Item.findAll({ limit: 10 }).then((itemData) => {
    return { message: "Success", item: itemData };
  })
  .catch((err) => {
    return { error: err };
  });
}

exports.updateItem = (req, h) => {
  return  models.Item.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((itemInfo) => {
    if(!itemInfo){
      return { message: "Item not found"}
    }
    console.log(req.payload)
    const params = {
      name: req.payload.name,
      price: req.payload.price,
      quantity: req.payload.quantity,
      category: req.payload.category
    };
    return itemInfo.updateAttributes(params).then((itemInfo) => {
      return { message: "Item updated Successfully", item: itemInfo};
    });
  })
  .catch((err) => {
    return { err: err}
  })
}

exports.deleteItem = (req, h) => {
  console.log(req);
  return models.Item.destroy({
    where: {
      id: req.params.id
    }
  }).then((itemInfo) => {
    return { message: "Success", item: itemInfo };
  })
  .catch((err) => {
    return { err };
  });
}