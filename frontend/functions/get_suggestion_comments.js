require('dotenv').config()
const { ObjectId } = require('mongodb');
const { clientPromise } = require('../helpers/getDatabase');


const handler = async (event) => {
    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);

        const reqParams = event.queryStringParameters;
        const results = await collection
            .find({
                _id: new ObjectId(reqParams.id)
            })
            .project({
                _id: 0,
                comments: 1
            })
            .toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(results[0].comments),
        }
    } catch (e) {
        return { statusCode: 500, body: e.toString() };
    }
}

module.exports = { handler };