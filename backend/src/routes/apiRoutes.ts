// routes/apiRoutes.js

import express from "express";
import versionsController from "../controllers/versionController.js";
import variantController from "../controllers/variantController.js";

const router = express.Router();

router.get("/versions/:app/:packageName", versionsController.getAllVersions);
router.get("/version/:versionId", versionsController.getVersionById);
router.delete("/version/:versionId", versionsController.deleteVersionById);
router.put("/version/:versionId", versionsController.updateVersionById);

router.get("/variants", variantController.getAllVariants);
router.get("/variants/:versionId", variantController.getVariantByVersionId);
router.delete("/variants/:versionId", variantController.deleteVariantById);
router.put("/variants/:versionId", variantController.updateVariantById);

// module.exports = router;
export default router;
