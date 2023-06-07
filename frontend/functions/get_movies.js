const { MongoClient } = require('mongodb');
require('dotenv').config()



const mongoClient = new MongoClient(process.env.MONGODB_URI,
  { 
    useNewUrlParser: true ,
    useUnifiedTopology: true,
  }
)

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    const results = await collection.find({}).limit(10).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    }
  } catch (e) {
    return { statusCode: 500, body: error.toString() + "lala" };
  }
}
// https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/introduction-with-serverless-functions
module.exports = { handler };