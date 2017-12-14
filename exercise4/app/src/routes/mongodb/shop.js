const express = require('express');
const router = express.Router();
const DbContext = require("../../models/mongodb/dbContext");

const index = (req, res, next) => {
    // show all shops
    DbContext.Shop.find().exec((err,data) => {    
      if(err){
        res.status(400).send(err);
      }
      else{
        res.status(200).send(data);
        }      
    });
  };
  
  const createShop = (req, res, next) => {
    // Create shop
    let shop = new DbContext.Shop(req.body);
    shop.save((err,data) => {
      if(err){
          res.status(400).send(err);
      }
      else{
        res.status(200).send(data);
        }
    });
  };

  const getShop = (req, res, next) => {
    // get shop
    DbContext.Shop.findOne(
        {
            _id:req.params['id']
          },(err,data) => {
        if(err){
            res.status(400).send(err);
        }
        else{
          res.status(200).send(data);
          }
    });
  };

  const getProductsById = (req, res, next) => {
    // get products
    DbContext.Product.find(
        {
            shop_id:req.params['id']
        },(err,data) => {
        if(err){
            res.status(400).send(err);
        }
        else{
          res.status(200).send(data);
          }
    });
  };
  
  // Routes
  router.get('/', index);
  router.post('/', createShop);
  router.get('/:id', getShop)
  router.get('/:id/products', getProductsById);
  
  module.exports = router;
  