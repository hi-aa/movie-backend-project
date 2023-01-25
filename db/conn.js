//Exposes a global connection to the Atlas database by exporting a MongoDB client that any other module can use.

const { MongoClient } = require('mongodb');
require('dotenv').config({
	path : ".env.development"
});

const connectionString = process.env.ATLAS_URI;
console.log('env>> ', connectionString)
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("sample_airbnb");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};