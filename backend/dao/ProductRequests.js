
let productFeedbackDB;
let productRequests;


export default class ProductRequestsDAO {

  static async injectDB(conn) {
    if (productFeedbackDB) {
      return;
    }

    try {
      productFeedbackDB = await conn.db('product-feedback');
      productRequests = await productFeedbackDB.collection('product-requests');
    }
    catch (e) {
      console.error(`Unable to establish connection in product-requests: ${e}`);
    }
  }

  static async getAllSuggestions() {
    let cursor;
    try {
      cursor = await productRequests.find({
      }).toArray();
      return cursor;
    }
    catch (e) {
      console.error(`Unable to fetch product requests. ${e}`);
    }
    return []
  }

}