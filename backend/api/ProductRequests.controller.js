import ProductRequestsDAO from "../dao/ProductRequests.js"


export default class ProductRequestsController {

  static async apiGetAllSuggestions(req, res) {
    const suggestions = await ProductRequestsDAO.getAllSuggestions();

    res.json(suggestions);
  }
}
