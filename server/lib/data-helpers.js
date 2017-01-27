"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Save To Database:

    saveTweet: function saveTweet(newTweet, callback) {
      db.collection("tweets").insert(newTweet, (err, result) => {
        if (err) {
          return console.error(err);
        }
        callback(null, true);
      })
    },

    // Pull From Databse:

    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, result) => {
        if (err) {
          return console.error(err);
        }
        callback(null, result);
      })
    }

  };
}
