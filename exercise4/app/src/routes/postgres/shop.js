const express = require('express');
const router = express.Router();
const DbContext = require("../../models/postgres/dbContext");

const index = (req, res, next) => {
    // show all owners
    DbContext.Shop.findAll().then((data) => {    
      res.status(200).send({
        "data": data
      }).catch((error)=>{
        res.status(400).send(error);
    });      
    });
  };
  
  const createShop = (req, res, next) => {
    // Create owner
    DbContext.Shop.create(req.body).then((data) => {
      res.status(200).send(data);
    }).catch((error)=>{
        res.status(400).send(error);
    });
  };

  const getShop = (req, res, next) => {
    // get owner
    DbContext.Shop.findById(req.params['id']).then((data) => {
      res.status(200).send(data);
    }).catch((error)=>{
        res.status(400).send(error);
    });
  };

  const getProductsById = (req, res, next) => {
    // get owner
    DbContext.Product.findAll({
        where:{
            shop_id:req.params['id']
        }
    }).then((data) => {
      res.status(200).send(data);
    }).catch((error)=>{
        res.status(400).send(error);
    });
  };
  
  // Routes
  router.get('/', index);
  router.post('/', createShop);
  router.get('/:id', getShop)
  router.get('/:id/products', getProductsById);
  
  module.exports = router;
  