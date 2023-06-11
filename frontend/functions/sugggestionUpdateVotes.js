require('dotenv').config()
const { ObjectId } = require('mongodb');
const { clientPromise } = require('../helpers/getDatabase');


const handler = async (event) => {
    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);

        const reqParams = JSON.parse(event.body);
        if (!reqParams) {
            return {
                statusCode: 500,
                body: 'invalid request parameters'
            }
        }
        const targetSuggestion = await collection.find(
            { _id: new ObjectId(reqParams.id) },
        ).toArray();

        // validate if suggestion exist
        if (targetSuggestion.length === 0) {
            return {
                statusCode: 500,
                body: `Error: suggestion <${reqParams.id}> does not exist`
            }
        }

        let upvotesCount = await targetSuggestion[0].upvotes;
        let likedByList = (await targetSuggestion[0].likedByList) || [];

        if(likedByList.includes(reqParams.likedBy)) {
            likedByList.pop(reqParams.likedBy);   
            upvotesCount--;
        } else {
            likedByList.push(reqParams.likedBy);   
            upvotesCount++;
        }

        // update suggestion
        const results = await collection.updateOne(
            { _id: new ObjectId(reqParams.id) },
            {
                $set: {
                    upvotes: upvotesCount,
                    likedByList: likedByList
                }
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (e) {
        return { statusCode: 500, body: e.toString() };
    }
}

module.exports = { handler };