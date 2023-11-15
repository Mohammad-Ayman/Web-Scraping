// controllers/variantController.js
import { Express, Request, Response } from "express";
import Variant from "../models/variantModel.js";

const variantController = {
  getAllVariants: async (req: Request, res: Response) => {
    try {
      console.log("params", req.params.versionId);
      const variants = await Variant.find({ versionId: req.params.versionId });
      console.log("variants", variants);
      res.json(variants);
    } catch (error: any) {
      console.error("Error getting variants:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },

  getVariantById: async (req: Request, res: Response) => {
    try {
      const variant = await Variant.findById(req.params.variantId);
      res.json(variant);
    } catch (error: any) {
      console.error("Error getting variant by ID:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },
  deleteVariantById: async (req: Request, res: Response) => {
    try {
      await Variant.deleteOne({ variantId: req.params.variantId });
      res.send("variant deleted!");
    } catch (error: any) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  deleteVariantsByVersionId: async (req: Request, res: Response) => {
    try {
      await Variant.deleteMany({ versionId: req.params.versionId });
      res.send("variant deleted!");
    } catch (error: any) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  updateVariantById: async (req: Request, res: Response) => {
    try {
      const updatedVariant = await Variant.findOneAndUpdate(
        { variantId: req.params.variantId },
        { $set: { releaseDate: new Date() } },
        { new: true }
      );
      res.json(updatedVariant);
    } catch (error: any) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  // Add other controller methods for CRUD operations
};

// module.exports = variantController;
export default variantController;
