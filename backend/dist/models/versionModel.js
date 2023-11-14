// models/versionModel.js
import mongoose from "../db/connection.js";
const versionSchema = new mongoose.Schema({
    versionId: String,
    releaseDate: String,
    totalVariants: String,
    variantsURL: String,
});
const Version = mongoose.model("Version", versionSchema);
export default Version;
