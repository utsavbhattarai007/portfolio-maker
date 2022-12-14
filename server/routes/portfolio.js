import { Router } from "express";
import {
  createPortfolio,
  deleteAllPortfolio,
  deletePortfolio,
  getImg,
  getPortfolio,
  getPortfolioById,
  getPortfolios,
  searchPortfolio,
  updateCustomizationPortfolio,
  updateLinksPortfolio,
  updateNamePortfolio,
  updateOther,
} from "../controllers/_portfolio.js";

//Instance
const router = Router();

router.get("/:username", getPortfolio);
router.get("/id/:id", getPortfolioById);
router.get("/", getPortfolios);
router.patch("/username", updateNamePortfolio);
router.patch("/links", updateLinksPortfolio);
router.patch("/customization", updateCustomizationPortfolio);
router.patch("/other", updateOther);
router.delete("/all", deleteAllPortfolio);
router.post("/", createPortfolio);
router.get("/search/:username", searchPortfolio);
router.get("/img/all",getImg)
// router.delete("/:username", deletePortfolio);

export default router;
