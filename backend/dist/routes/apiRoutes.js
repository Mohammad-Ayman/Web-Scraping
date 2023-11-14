"use strict";
// routes/apiRoutes.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const versionController_js_1 = __importDefault(require("../controllers/versionController.js"));
const router = express_1.default.Router();
router.get("/versions", versionController_js_1.default.getAllVersions);
router.get("/versions/:versionId", versionController_js_1.default.getVersionById);
router.delete("/versions/:versionId", versionController_js_1.default.deleteVersionById);
router.put("/versions/:versionId", versionController_js_1.default.updateVersionById);
// module.exports = router;
exports.default = router;
