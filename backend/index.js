import { MongoClient } from "mongodb";
import app from './server.js';
import ProductRequestsDAO from "./dao/ProductRequests.js";

const DB_URI = process.env.PRODUCT_FEEDBACK_APP_DB_URI;
const DB_COLLECTION = process.env.PRODUCT_FEEDBACK_APP_NS;
const PORT = process.env.SERVER_PORT || 9000

app.listen(PORT);


// MongoClient.connect(DB_URI).then(
//   async client => {
//     ProductRequestsDAO.injectDB(client);
//     app.listen(PORT);
//   }
// )