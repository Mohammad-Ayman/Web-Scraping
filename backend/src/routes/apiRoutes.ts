// routes/apiRoutes.js

import express from "express";
import versionsController from "../controllers/versionController.js";
import variantController from "../controllers/variantController.js";

const router = express.Router();

router.get("/versions", versionsController.getAllVersions);
router.get("/versions/:versionId", versionsController.getVersionById);
router.delete("/versions/:versionId", versionsController.deleteVersionById);
router.put("/versions/:versionId", versionsController.updateVersionById);

router.get("/variants", variantController.getAllVariants);
router.get("/variants/:versionId", variantController.getVariantById);
router.delete("/variants/:versionId", variantController.deleteVariantById);
router.put("/variants/:versionId", variantController.updateVariantById);

// module.exports = router;
export default router;
