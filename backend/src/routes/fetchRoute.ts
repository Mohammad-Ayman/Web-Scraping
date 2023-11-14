// routes/fetchRoute.js
import express, { Request, Response } from "express";
import { scrapeVersions, scrapeVariants } from "../utils/scraping.js";
import Version from "../models/versionModel.js";
import Variant from "../models/variantModel.js";

const router = express.Router();

router.get("/versions", async (req: Request, res: Response) => {
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

router.get("/variants", async (req: Request, res: Response) => {
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
