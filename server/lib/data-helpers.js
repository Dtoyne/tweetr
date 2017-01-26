"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Save To Database:

    saveTweet: function(newTweet, callback) {
      db.collection("tweeter").insert(newTweet, (err, result) => {
        if (err) {
          return console.error(err);
        }
        callback(null, true);
        db.close;
      })
    },

    // Pull From Databse:

    getTweets: function(callback) {
      db.collection("tweeter").find().toArray((err, result) => {
        if (err) {
          return console.error(err);
        }
        callback(null, result);
        db.close;
      })
    }

  };
}
