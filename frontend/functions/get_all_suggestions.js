const { MongoClient } = require('mongodb');
require('dotenv').config()
const { clientPromise } = require('../helpers/getDatabase');


const handler = async (event) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    const results = await collection
      .find({})
      .project({
        _id: 0,
        id: 1,
        title: 1,
        category: 1,
        status: 1,
        description: 1,
        upvotes: 1,
        comments: 1
      })
      .toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    }
  } catch (e) {
    return { statusCode: 500, body: error.toString() };
  }
}
// https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/introduction-with-serverless-functions
module.exports = { handler };