var mongoose = require('mongoose');
var User = mongoose.model('User');
//var User = require('../../models/Users.js');

module.exports.profileRead = function(req, res) {
  console.log(req)
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        //console.log("user: ", user)
        res.status(200).json(user);
      });
  }

};