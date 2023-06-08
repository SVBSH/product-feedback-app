const { MongoClient } = require('mongodb');
require('dotenv').config()

const mongoClient = new MongoClient(process.env.MONGODB_URI,
  { 
    useNewUrlParser: true ,
    useUnifiedTopology: true,
  }
)

const clientPromise = mongoClient.connect();


module.exports = { clientPromise };