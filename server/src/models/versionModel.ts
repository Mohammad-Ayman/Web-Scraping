// models/versionModel.js
import mongoose from "../db/connection.js";

const versionSchema = new mongoose.Schema({
  versionId: { type: String, unique: true },
  appName: { type: String, required: true },
  releaseDate: String,
  totalVariants: Number,
  variantsURL: String,
});
const Version = mongoose.model("Version", versionSchema);

export default Version;
