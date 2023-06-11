require('dotenv').config()
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

        console.log(reqParams);

        if (reqParams.isReply) {
            const results = await collection.updateOne(
                {
                    title: reqParams.title
                },
                {
                    $push: {
                        'comments.$[c].replies': {
                            content: reqParams.content,
                            replyingTo: reqParams.replyingTo,
                            user: reqParams.user
                        }
                    }
                },
                {
                    arrayFilters: [
                        {
                            "c.id": parseInt(reqParams.parentId)
                        }
                    ]
                }
            )
            return {
                statusCode: 200,
                body: JSON.stringify(results),
            }
        }

        const results = await collection.updateOne(
            { title: reqParams.title },
            {
                $push: {
                    comments: {
                        content: reqParams.content,
                        id: reqParams.id,
                        user: reqParams.user
                    }
                }
            }
        )

        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (e) {
        return { statusCode: 501, body: e.toString() };
    }
}

module.exports = { handler };

// $push: {
//     title: reqParams.title,
//     category: reqParams.category || 'test',
//     upvotes: 0 || 'test',
//     status: reqParams.status || 'test',
//     description: reqParams.description || 'test',
//     comments: []
// }