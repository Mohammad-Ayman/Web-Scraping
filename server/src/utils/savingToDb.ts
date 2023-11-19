import { scrapeVersions, scrapeVariants } from "../utils/scraping.js";
import Version from "../models/versionModel.js";
import Variant from "../models/variantModel.js";

export const saveVersions = async (app: string, packageName: string) => {
  let versions = await scrapeVersions(app, packageName);

  // Handle where versions is empty
  if (!versions || versions.length === 0) {
    return "No versions to save.";
  }
  // Map the versions
  const versionsToInsert = versions.map((version) => ({
    versionId: version.version,
    appName: version.appName,
    releaseDate: version.releaseDate,
    totalVariants: version.variantsCount,
    variantsURL: version.variantsURL,
  }));

  try {
    // bulk insert
    await Version.insertMany(versionsToInsert, { ordered: false });
    return "Saved Versions Successfully";
  } catch (error: any) {
    if (error.code === 11000) {
      // Duplicate key error (versionId is not unique)
      console.log(`Duplicate versionId: Skipping Duplicates.`);
      return `Duplicate versionId: Skipping Duplicates.`;
    } else {
      // Other errors
      console.error("Error saving version:", error.message);
    }
  }
};

export const saveVariants = async (versionId: string, variantsUrl: string) => {
  let variants = await scrapeVariants(versionId, variantsUrl);

  // Handle where variants is empty
  if (!variants || variants.length === 0) {
    return "No variants to save.";
  }

  // Map the variants
  const variantsToInsert = variants.map((variant) => ({
    versionId: variant.versionId,
    variantId: variant.variantId,
    architecture: variant.variantArchitecture,
    minAndroidVersion: variant.variantMinAndroidVersion,
    dpi: variant.dpi,
  }));

  try {
    // bulk insert
    await Variant.insertMany(variantsToInsert, { ordered: false });
    return variantsToInsert;
  } catch (error: any) {
    if (error.code === 11000) {
      // Duplicate key error (variantId is not unique)
      console.log(`Duplicate variantId: Skipping Duplicates.`);
      return `Duplicate variantId: Skipping Duplicates.`;
    } else {
      // Other errors
      console.error("Error saving variant:", error.message);
    }
  }
};
