const express = require('express');
const router = express.Router();
const DbContext = require("../../models/mongodb/dbContext");

const index = (req, res, next) => {
    DbContext.Owner.find().exec(function(error,data){
      if(error){
        res.status(400).send(error);
      }
      else{
        res.status(200).send(data);
      }
    });
  };
  
  const createOwner = (req, res, next) => {
    // Create owner
    var owner = new DbContext.Owner(req.body);
    owner.save((error,owner)=>{
      if(error){
        res.status(400).send(error);
      }      
      else{
        res.status(200).send(owner);
      }
    });
  };

  const getOwner = (req, res, next) => {
    // get owner
    DbContext.Owner.findOne({
      _id : req.params['id']
    },(err,data) => {
      if(err){
        res.status(400).send(err);
      }
      else {
      res.status(200).send(data);
      }
    });
  };
  
  const updateOwner = (req, res, next) => {
    // get owner
    // console.log(req.body);
    DbContext.Owner.findOneAndUpdate({_id : req.body['_id']},{name:req.body['name']},{upsert:true},(err,data) => {
      if(err){
        res.status(400).send(err);
      }
      else{
        res.status(200).send(req.body);
      }
    });
  };
  // Routes
  router.get('/', index);
  router.post('/', createOwner);
  router.get('/:id', getOwner);
  router.put('/', updateOwner);
  
  module.exports = router;
 