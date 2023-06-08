require('dotenv').config()
const { clientPromise } = require('../helpers/getDatabase');


const handler = async (event) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const reqParams = JSON.parse(event.body);
    console.log(reqParams);
    const results = await collection.deleteMany({
      name: "test1"
    })
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    }
  } catch (e) {
    return { statusCode: 501, body: e.toString() };
  }
}

module.exports = { handler };