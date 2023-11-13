// routes/apiRoutes.js

const express = require("express");
const versionsController = require("../controllers/versionsController");

const router = express.Router();

router.get("/versions", versionsController.getAllVersions);
router.get("/versions/:versionId", versionsController.getVersionById);
router.delete("/versions/:versionId", versionsController.deleteVersionById);
router.put("/versions/:versionId", versionsController.updateVersionById);

module.exports = router;
