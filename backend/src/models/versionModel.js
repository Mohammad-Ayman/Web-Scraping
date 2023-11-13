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

const Version = mongoose.model("Version", versionSchema);

// module.exports = Version;
export default Version;
