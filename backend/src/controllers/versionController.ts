// controllers/versionController.js
import { Express, Request, Response } from "express";
import { Version } from "../models/versionModel.js";

const versionController = {
  getAllVersions: async (req: Request, res: Response) => {
    try {
      const versions = await Version.find();
      res.json(versions);
    } catch (error: any) {
      console.error("Error getting versions:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },

  getVersionById: async (req: Request, res: Response) => {
    try {
      const version = await Version.findById(req.params.versionId);
      res.json(version);
    } catch (error: any) {
      console.error("Error getting version by ID:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },
  deleteVersionById: async (req: Request, res: Response) => {
    try {
      await Version.deleteOne({ versionId: req.params.versionId });
      res.send("Version deleted!");
    } catch (error: any) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateVersionById: async (req: Request, res: Response) => {
    try {
      const updatedVersion = await Version.findOneAndUpdate(
        { versionId: req.params.versionId },
        { $set: { releaseDate: new Date() } },
        { new: true }
      );
      res.json(updatedVersion);
    } catch (error: any) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  // Add other controller methods for CRUD operations
};

// module.exports = versionController;
export default versionController;
