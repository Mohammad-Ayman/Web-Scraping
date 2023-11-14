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
Object.defineProperty(exports, "__esModule", { value: true });
const versionModel_js_1 = require("../models/versionModel.js");
const versionController = {
    getAllVersions: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const versions = yield versionModel_js_1.Version.find();
            res.json(versions);
        }
        catch (error) {
            console.error("Error getting versions:", error.message);
            res.status(500).send("Internal Server Error");
        }
    }),
    getVersionById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const version = yield versionModel_js_1.Version.findById(req.params.versionId);
            res.json(version);
        }
        catch (error) {
            console.error("Error getting version by ID:", error.message);
            res.status(500).send("Internal Server Error");
        }
    }),
    deleteVersionById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield versionModel_js_1.Version.deleteOne({ versionId: req.params.versionId });
            res.send("Version deleted!");
        }
        catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }),
    updateVersionById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedVersion = yield versionModel_js_1.Version.findOneAndUpdate({ versionId: req.params.versionId }, { $set: { releaseDate: new Date() } }, { new: true });
            res.json(updatedVersion);
        }
        catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }),
    // Add other controller methods for CRUD operations
};
// module.exports = versionController;
exports.default = versionController;
