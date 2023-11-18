import mongoose from "../db/connection.js";

const variantSchema = new mongoose.Schema({
  versionId: String,
  variantId: String,
  architecture: String,
  minAndroidVersion: String,
  dpi: String,
});

// Create a compound index on variantId and dpi
variantSchema.index({ variantId: 1, dpi: 1 }, { unique: true });

const Variant = mongoose.model("Variant", variantSchema);

export default Variant;
