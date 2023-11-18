// models/versionModel.js

import mongoose from "../db/connection.js";

const variantSchema = new mongoose.Schema({
  versionId: String,
  variantId: { type: String, unique: true },
  architecture: String,
  minAndroidVersion: String,
  dpi: String,
});

const Variant = mongoose.model("Variant", variantSchema);

export default Variant;
