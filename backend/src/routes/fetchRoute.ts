// routes/fetchRoute.js
import express from "express";
import { scrapeVersions, scrapeVariants } from "../utils/scraping.js";
import { Version, Variant } from "../models/versionModel.js";

const router = express.Router();

router.get("/versions", async (req, res) => {
  console.log("Handling /fetch request");
  let versions = await scrapeVersions();

  // Iterate over versions and save each to the database
  for (const version of versions!) {
    const newVersion = new Version({
      versionId: version.version,
      releaseDate: version.releaseDate,
      totalVariants: version.variantsCount,
      variantsURL: version.variantsURL,
    });

    console.log(newVersion); // Check the created version before saving
    await newVersion.save();
  }
  res.send("Data fetched and saved!");
});

router.get("/variants", async (req, res) => {
  let [url, versionId] = req.body;
  console.log("Handling /fetch request");
  let variants = await scrapeVariants(url, versionId);

  // Iterate over versions and save each to the database
  for (const variant of variants!) {
    const newVariant = new Variant({
      versionId: variant.versionId,
      variantId: variant.variantId,
      architecture: variant.variantArchitecture,
      minAndroidVersion: variant.variantMinAndroidVersion,
      dpi: variant.dpi,
    });

    console.log(newVariant); // Check the created version before saving
    await newVariant.save();
  }
  res.send("Data fetched and saved!");
});

export default router;
