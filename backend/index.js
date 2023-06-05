import { MongoClient } from "mongodb";
import app from './server.js';
import ProductRequestsDAO from "./dao/ProductRequests.js";

const DB_URI = process.env.PRODUCT_FEEDBACK_APP_DB_URI;
const DB_COLLECTION = process.env.PRODUCT_FEEDBACK_APP_NS;


async function foo() {
  const request = await ProductRequestsDAO.getAllRequests();
  console.log(request);
}

MongoClient.connect(DB_URI).then(
  async client => {
    ProductRequestsDAO.injectDB(client);
    app.listen(process.env.SERVER_PORT);
  }
)