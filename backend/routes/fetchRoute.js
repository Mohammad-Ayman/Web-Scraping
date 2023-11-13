// routes/fetchRoute.js

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const Version = require("../models/versionModel");

const router = express.Router();

router.get("/fetchAndSave", async (req, res) => {
  await scrapeInstagramAPKs();
  res.send("Data fetched and saved!");
});

const scrapeInstagramAPKs = async () => {
  try {
    const response = await axios.get(
      "https://www.apkmirror.com/apk/instagram/instagram-instagram/"
    );

    const versions = [];
    const limit = 1; // Set the desired limit
    const $ = cheerio.load(response.data);

    // Iterate over individual APK rows
    $(".appRow .table-row").each(async (index, e) => {
      if (index < limit) {
        // Extract the version information
        const versionInfo = $(e)
          .find(".appRowTitle.wrapText.marginZero.block-on-mobile")
          .text()
          .trim();

        // Extract the release date
        const versionReleaseDate = $(e)
          .find(".dateyear_utc")
          .attr("data-utcdate")
          .trim();

        const variantsCount = $(e).find(".appRowVariantTag").text().trim();
        const variantsURL = $(e)
          .find(".appRowVariantTag a")
          .attr("href")
          .trim();
        const variants = await scrapeVariants(
          `https://www.apkmirror.com${variantsURL}`,
          versionInfo
        );
        console.log(variants);
        // Push the version information and release date as an object to the array
        versions.push({
          version: versionInfo,
          releaseDate: versionReleaseDate,
          variantsCount,
          variantsURL,
          variants,
        });
      }
    });

    // Log the array of version information
    console.log(versions);
  } catch (error) {
    console.error("Error during scraping versions:", error.message);
  }
};

const scrapeVariants = async (url, versionId) => {
  try {
    const response = await axios.get(url);

    const variants = [];
    const $ = cheerio.load(response.data);

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
    return variants;
  } catch (error) {
    console.error("Error during scraping variants:", error.message);
  }
};
module.exports = router;
