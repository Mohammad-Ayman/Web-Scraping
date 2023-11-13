// models/versionModel.js

import mongoose from "../db/connection.js";

const variantSchema = new mongoose.Schema({
  versionId: String,
  variantId: String,
  architecture: String,
  minAndroidVersion: String,
  dpi: String,
});

const versionSchema = new mongoose.Schema({
  versionId: String,
  releaseDate: String,
  totalVariants: String,
  variantsURL: String,
  // variants: [variantSchema],
});

export const Version = mongoose.model("Version", versionSchema);
export const Variant = mongoose.model("Version", variantSchema);

// module.exports = Version;
// export default Version;
