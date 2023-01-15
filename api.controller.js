'use strict';
const Apis = require('./api.model');

exports.findAll = function(req, res) {
  Apis.findAll(function(err, movies) {
    if (err)
      res.send(err);
    res.send(movies);
  });
};


exports.findAllBig = function(req, res) {
  Apis.findAllBig(function(err, movies) {
    if (err)
      res.send(err);
      res.send(movies);
  });
};



exports.create = function(req, res){
  const new_movie = new Apis(req.body);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Apis.create(new_movie, function(err, movie) {
      if (err)
        res.send(err);
      res.json({error: false, message: "New movie added successfully!",
       data: movie});
    });

  }
};

