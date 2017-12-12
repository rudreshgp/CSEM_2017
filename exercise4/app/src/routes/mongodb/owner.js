

const DbContext = require("../../models/mongodb/dbContext");
const express = require('express');
const router = express.Router();
console.log("Test"+DbContext.Product);
const index = (req, res, next) => {
    // res.status(200).send({"data":"test"});
    // show all projects
   
    DbContext.Owner.findAll().then((data) => {    
      res.status(200).send({
        "data": data
      });      
    });
  };
  
  const createOwner = (req, res, next) => {
    // show all Owners
    DbContext.Owner.create(req.body).then((data) => {
      res.status(200).send(data);
    });
  };
  
  // Routes
  router.get('/', index);
  router.post('/create', createOwner);
  
  module.exports = router;