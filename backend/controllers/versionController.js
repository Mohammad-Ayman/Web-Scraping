// controllers/versionController.js

const Version = require("../models/versionModel");

const versionController = {
  getAllVersions: async (req, res) => {
    try {
      const versions = await Version.find();
      res.json(versions);
    } catch (error) {
      console.error("Error getting versions:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },

  getVersionById: async (req, res) => {
    try {
      const version = await Version.findById(req.params.versionId);
      res.json(version);
    } catch (error) {
      console.error("Error getting version by ID:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },
  deleteVersionById: async (req, res) => {
    try {
      await Version.deleteOne({ versionId: req.params.versionId });
      res.send("Version deleted!");
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateVersionById: async (req, res) => {
    try {
      const updatedVersion = await Version.findOneAndUpdate(
        { versionId: req.params.versionId },
        { $set: { releaseDate: new Date() } },
        { new: true }
      );
      res.json(updatedVersion);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  // Add other controller methods for CRUD operations
};

module.exports = versionController;
