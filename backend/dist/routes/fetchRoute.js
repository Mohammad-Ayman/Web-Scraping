"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/fetchRoute.js
const express_1 = __importDefault(require("express"));
const scraping_js_1 = require("../utils/scraping.js");
const versionModel_js_1 = require("../models/versionModel.js");
const router = express_1.default.Router();
router.get("/versions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Handling /fetch request");
    let versions = yield (0, scraping_js_1.scrapeVersions)();
    // Iterate over versions and save each to the database
    for (const version of versions) {
        const newVersion = new versionModel_js_1.Version({
            versionId: version.version,
            releaseDate: version.releaseDate,
            totalVariants: version.variantsCount,
            variantsURL: version.variantsURL,
        });
        console.log(newVersion); // Check the created version before saving
        yield newVersion.save();
    }
    res.send("Data fetched and saved!");
}));
router.get("/variants", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let [url, versionId] = req.body;
    console.log("Handling /fetch request");
    let variants = yield (0, scraping_js_1.scrapeVariants)(url, versionId);
    // Iterate over versions and save each to the database
    for (const variant of variants) {
        const newVariant = new versionModel_js_1.Variant({
            versionId: variant.versionId,
            variantId: variant.variantId,
            architecture: variant.variantArchitecture,
            minAndroidVersion: variant.variantMinAndroidVersion,
            dpi: variant.dpi,
        });
        console.log(newVariant); // Check the created version before saving
        yield newVariant.save();
    }
    res.send("Data fetched and saved!");
}));
exports.default = router;
