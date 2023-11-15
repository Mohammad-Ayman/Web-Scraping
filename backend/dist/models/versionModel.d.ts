import mongoose from "../db/connection.js";
declare const Version: mongoose.Model<{
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: number | null | undefined;
    variantsURL?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: number | null | undefined;
    variantsURL?: string | null | undefined;
}> & {
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: number | null | undefined;
    variantsURL?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: number | null | undefined;
    variantsURL?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: number | null | undefined;
    variantsURL?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: number | null | undefined;
    variantsURL?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Version;
