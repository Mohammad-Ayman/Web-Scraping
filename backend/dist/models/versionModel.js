"use strict";
// models/versionModel.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = exports.Version = void 0;
const connection_js_1 = __importDefault(require("../db/connection.js"));
const variantSchema = new connection_js_1.default.Schema({
    versionId: String,
    variantId: String,
    architecture: String,
    minAndroidVersion: String,
    dpi: String,
});
const versionSchema = new connection_js_1.default.Schema({
    versionId: String,
    releaseDate: String,
    totalVariants: String,
    variantsURL: String,
});
exports.Version = connection_js_1.default.model("Version", versionSchema);
exports.Variant = connection_js_1.default.model("Variant", variantSchema);
