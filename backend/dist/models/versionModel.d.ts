import mongoose from "../db/connection.js";
export declare const Version: mongoose.Model<{
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: string | null | undefined;
    variantsURL?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: string | null | undefined;
    variantsURL?: string | null | undefined;
}> & {
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: string | null | undefined;
    variantsURL?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: string | null | undefined;
    variantsURL?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: string | null | undefined;
    variantsURL?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    versionId?: string | null | undefined;
    releaseDate?: string | null | undefined;
    totalVariants?: string | null | undefined;
    variantsURL?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const Variant: mongoose.Model<{
    versionId?: string | null | undefined;
    variantId?: string | null | undefined;
    architecture?: string | null | undefined;
    minAndroidVersion?: string | null | undefined;
    dpi?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    versionId?: string | null | undefined;
    variantId?: string | null | undefined;
    architecture?: string | null | undefined;
    minAndroidVersion?: string | null | undefined;
    dpi?: string | null | undefined;
}> & {
    versionId?: string | null | undefined;
    variantId?: string | null | undefined;
    architecture?: string | null | undefined;
    minAndroidVersion?: string | null | undefined;
    dpi?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    versionId?: string | null | undefined;
    variantId?: string | null | undefined;
    architecture?: string | null | undefined;
    minAndroidVersion?: string | null | undefined;
    dpi?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    versionId?: string | null | undefined;
    variantId?: string | null | undefined;
    architecture?: string | null | undefined;
    minAndroidVersion?: string | null | undefined;
    dpi?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    versionId?: string | null | undefined;
    variantId?: string | null | undefined;
    architecture?: string | null | undefined;
    minAndroidVersion?: string | null | undefined;
    dpi?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
