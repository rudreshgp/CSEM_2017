// import { read } from 'fs';

const express = require('express');
const router = express.Router();
const DbContext = require("../../models/mongodb/dbContext");

const index = (req, res, next) => {
    // show all owners
    DbContext.Product.find(req.body,(error,data) => {
        if(error){
          res.status(400).send(error);
        }
        else{
          res.status(200).send(data);
        }
      });
  };
  
  const createProduct = (req, res, next) => {
    // Create Product
    var product = new DbContext.Product(req.body);
    product.save((error,data) => {
        if(error){
          res.status(400).send(error);
        }
        else{
          res.status(200).send(data);
        }
      });
  };

  const getProduct = (req, res, next) => {
    // get product
    DbContext.Product.findOne(
        {
            _id:req.params['id']
        },(error,data) => {
        if(error){
            res.status(400).send(error);
          }
          else{
            res.status(200).send(data);
          }
    });
  };
  
  // Routes
  router.get('/', index);
  router.post('/', createProduct);
  router.get('/:id', getProduct);
  
  module.exports = router;
  