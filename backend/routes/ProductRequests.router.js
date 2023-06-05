import { Router } from "express";
import ProductRequestsController from "../api/ProductRequests.controller.js";

const router = Router();

router.get('/', ProductRequestsController.apiGetAllSuggestions);


export default router;