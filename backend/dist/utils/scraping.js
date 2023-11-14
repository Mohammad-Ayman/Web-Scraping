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
exports.scrapeVariants = exports.scrapeVersions = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const scrapeVersions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get("https://www.apkmirror.com/apk/instagram/instagram-instagram/");
        const versions = [];
        const limit = 10; // Set the desired limit
        const $ = cheerio_1.default.load(response.data);
        // Iterate over individual APK rows
        $(".appRow .table-row").each((index, e) => __awaiter(void 0, void 0, void 0, function* () {
            if (index < limit) {
                // Extract the version information
                const versionInfo = $(e)
                    .find(".appRowTitle.wrapText.marginZero.block-on-mobile")
                    .text()
                    .trim();
                // Extract the release date
                const trimmedReleaseDate = $(e)
                    .find(".dateyear_utc")
                    .attr("data-utcdate");
                const versionReleaseDate = trimmedReleaseDate ? trimmedReleaseDate.trim() : '';
                const variantsCount = $(e).find(".appRowVariantTag").text().trim();
                const variantsURLe = $(e)
                    .find(".appRowVariantTag a")
                    .attr("href");
                const variantsURL = variantsURLe ? variantsURLe.trim() : '';
                versions.push({
                    version: versionInfo,
                    releaseDate: versionReleaseDate,
                    variantsCount,
                    variantsURL,
                });
            }
        }));
        // Log the array of version information
        console.log("versions", versions);
        return versions;
    }
    catch (error) {
        console.error("Error during scraping versions:", error.message);
    }
});
exports.scrapeVersions = scrapeVersions;
const scrapeVariants = (url, versionId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const completeURL = `https://www.apkmirror.com${url}`;
        const response = yield axios_1.default.get(completeURL);
        const variants = [];
        const $ = cheerio_1.default.load(response.data);
        // Iterate over individual APK rows
        $(".variants-table .table-row:not(:first-child)").each((index, e) => {
            // Extract the variant information
            // console.log($(e).text());
            const variantId = $(e)
                .find(".table-cell:eq(0) .colorLightBlack:eq(0)")
                .text()
                .trim();
            // Extract the architecture
            const variantArchitecture = $(e).find(".table-cell:eq(1)").text().trim();
            const variantMinAndroidVersion = $(e)
                .find(".table-cell:eq(2)")
                .text()
                .trim();
            const variantDpi = $(e).find(".table-cell:eq(3)").text().trim();
            // Push the variant information as an object to the array
            variants.push({
                versionId: versionId,
                variantId,
                variantArchitecture: variantArchitecture,
                variantMinAndroidVersion: variantMinAndroidVersion,
                dpi: variantDpi,
            });
        });
        // Log the array of version information
        console.log("variants", variants);
        return variants;
    }
    catch (error) {
        console.error("Error during scraping variants:", error.message);
    }
});
exports.scrapeVariants = scrapeVariants;
