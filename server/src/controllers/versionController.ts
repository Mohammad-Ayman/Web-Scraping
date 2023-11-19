// controllers/versionController.js
import { Request, Response } from "express";
import Version from "../models/versionModel.js";
import { saveVersions } from "../utils/savingToDb.js";

const versionController = {
  getAllVersions: async (req: Request, res: Response) => {
    try {
      const { app, packageName } = req.params;
      await saveVersions(app, packageName);
      const versions = await Version.find({ appName: app });
      res.json(versions);
    } catch (error: any) {
      console.error("Error getting versions:", error.message);
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

  getVersionById: async (req: Request, res: Response) => {
    try {
      const version = await Version.findById(req.params.versionId);
      res.json(version);
    } catch (error: any) {
      console.error("Error getting version by ID:", error.message);
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
  deleteVersionById: async (req: Request, res: Response) => {
    try {
      await Version.deleteOne({ versionId: req.params.versionId });
      res.send("Version deleted!");
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

  updateVersionById: async (req: Request, res: Response) => {
    try {
      const updatedVersion = await Version.findOneAndUpdate(
        { versionId: req.params.versionId },
        { $set: { dpi: req.params.newValue } },
        { new: true }
      );
      res.json(updatedVersion);
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

export default versionController;
