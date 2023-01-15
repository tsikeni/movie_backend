'use strict';
var dbConn = require('./db');

//movie object
var Apis = function(movies){
  this.tconst     = movies.tconst;
  this.titleType    = movies.titleType;
  this.primaryTitle = movies.primaryTitle;
  this.runTimeMinutes = movies.runTimeMinutes;
  this.genres   = movies.genres;
};


Apis.create = function (newEmp, result) {
    dbConn.query("INSERT INTO movies set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


Apis.findById = function (id, result) {
    dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};


Apis.findAll = function (result) {
    dbConn.query("SELECT * from movies ORDER by runtimeMinutes desc limit 10;", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('movies : ', res);
            result(null, res);
        }
    });
};


Apis.findAllBig = function (result){
    dbConn.query("SELECT tconst, titleType, primaryTitle, runTimeMinutes, genres, averageRating FROM movies JOIN ratings USING (tconst) WHERE averageRating>6.0 ORDER BY averageRating;",function (err,res) {
      if(err){ 
        console.log("error: ", err);
        result(null, err);
      }  else{
        console.log('big ratings', res);
        result(null, res);
      }
    })
}



module.exports = Apis;