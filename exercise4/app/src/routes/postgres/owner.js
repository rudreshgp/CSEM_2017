const express = require('express');
const router = express.Router();
const DbContext = require("../../models/postgres/dbContext");

const index = (req, res, next) => {
    // show all owners
    DbContext.Owner.findAll().then((data) => {    
      res.status(200).send({
        "data": data
      });      
    }).catch((error)=>{
        res.status(400).send(error);
    });
  };
  
  const createOwner = (req, res, next) => {
    // Create owner
    DbContext.Owner.create(req.body).then((data) => {
      res.status(200).send(data);
    }).catch((error)=>{
        console.log(error);
        res.status(400).send(error);
    });
  };

  const getOwner = (req, res, next) => {
    // get owner
    DbContext.Owner.findById(req.params['id']).then((data) => {
      res.status(200).send(data);
    }).catch((error)=>{
        res.status(400).send(error);
    });
  };
  
  // Routes
  router.get('/', index);
  router.post('/', createOwner);
  router.get('/:id', getOwner);
  
  module.exports = router;
  