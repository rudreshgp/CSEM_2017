const express = require('express');
const router = express.Router();
const DbContext = require("../../models/progress/dbContext");

const index = (req, res, next) => {
    // show all owners
    DbContext.Product.findAll().then((data) => {    
      res.status(200).send({
        "data": data
      });      
    }).catch((error)=>{
        console.log(error);
        res.status(400).send(error);
        // res.status(error.status)
    });
  };
  
  const createProduct = (req, res, next) => {
    // Create owner
    DbContext.Product.create(req.body).then((data) => {
      res.status(200).send(data);
    }).catch((error)=>{
        console.log(error);
        res.status(400).send(error);
        // res.status(error.status)
    });
  };

  const getProduct = (req, res, next) => {
    // get owner
    DbContext.Product.findById(req.params['id']).then((data) => {
      res.status(200).send(data);
    }).catch((error)=>{
        console.log(error);
        res.status(400).send(error);
        // res.status(error.status)
    });
  };
  
  // Routes
  router.get('/', index);
  router.post('/', createProduct);
  router.get('/:id', getProduct);
  
  module.exports = router;
  