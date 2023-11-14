// routes/apiRoutes.js
import express from 'express';
import versionsController from "../controllers/versionController.js";
const router = express.Router();
router.get("/versions", versionsController.getAllVersions);
router.get("/versions/:versionId", versionsController.getVersionById);
router.delete("/versions/:versionId", versionsController.deleteVersionById);
router.put("/versions/:versionId", versionsController.updateVersionById);
// module.exports = router;
export default router;
