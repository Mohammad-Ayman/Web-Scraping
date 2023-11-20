// controllers/variantController.js
import { Request, Response, NextFunction } from "express";
import Variant from "../models/variantModel.js";
import { saveVariants } from "../utils/savingToDb.js";

const variantController = {
  getAllVariants: async (req: Request, res: Response) => {
    try {
      const variants = await Variant.find();
      res.json(saveVariants);
    } catch (error: any) {
      console.error("Error getting variants:", error.message);
      // Check for a specific error associated with rate limiting (status code 429)
      if (error.statusCode === 429) {
        res
          .status(429)
          .json({ message: "Rate limit exceeded. Please try again later." });
      } else {
        // For other errors, respond with a generic 500 status code
        res.status(500).send("Internal Server Error");
      }
    }
  },

  getVariantByVersionId: async (req: Request, res: Response) => {
    console.log("req.params.versionId", req.params);
    console.log("req.params.variantsUrl", req.params.variantsUrl);

    try {
      await saveVariants(req.params.versionId, req.params[0].trim());

      // Fetch variants from the database
      const variants = await Variant.find({
        versionId: req.params.versionId.trim(),
      });

      if (variants.length > 0) {
        res.json(variants);
      } else {
        // If no variants are found, return an appropriate response
        res
          .status(404)
          .json({ message: "Variants not found for the given versionId" });
      }
    } catch (error: any) {
      console.error("Error getting variant by ID:", error.message);

      // Check for a specific error associated with rate limiting (status code 429)
      if (error.statusCode === 429) {
        res
          .status(429)
          .json({ message: "Rate limit exceeded. Please try again later." });
      } else {
        // For other errors, respond with a generic 500 status code
        res.status(500).send("Internal Server Error");
      }
    }
  },
  deleteVariantById: async (req: Request, res: Response) => {
    try {
      await Variant.deleteOne({ variantId: req.params.variantId });
      res.send("variant deleted!");
    } catch (error: any) {
      // Check for a specific error associated with rate limiting (status code 429)
      if (error.statusCode === 429) {
        res
          .status(429)
          .json({ message: "Rate limit exceeded. Please try again later." });
      } else {
        // For other errors, respond with a generic 500 status code
        res.status(500).send("Internal Server Error");
      }
    }
  },
  deleteVariantsByVersionId: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await Variant.deleteMany({ versionId: req.params.versionId });
      res.send(`variants with version Id ${req.params.versionId} deleted!`);
    } catch (error: any) {
      // Check for a specific error associated with rate limiting (status code 429)
      if (error.statusCode === 429) {
        res
          .status(429)
          .json({ message: "Rate limit exceeded. Please try again later." });
      } else {
        // For other errors, respond with a generic 500 status code
        res.status(500).send("Internal Server Error");
      }
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
      // Check for a specific error associated with rate limiting (status code 429)
      if (error.statusCode === 429) {
        res
          .status(429)
          .json({ message: "Rate limit exceeded. Please try again later." });
      } else {
        // For other errors, respond with a generic 500 status code
        res.status(500).send("Internal Server Error");
      }
    }
  },
};

export default variantController;
