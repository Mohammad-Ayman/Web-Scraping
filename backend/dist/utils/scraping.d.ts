interface Version {
    version: string;
    releaseDate: string;
    variantsCount: string;
    variantsURL: string;
}
interface Variant {
    versionId: string;
    variantId: string;
    variantArchitecture: string;
    variantMinAndroidVersion: string;
    dpi: string;
}
export declare const scrapeVersions: () => Promise<Version[] | undefined>;
export declare const scrapeVariants: (url: string, versionId: string) => Promise<Variant[] | undefined>;
export {};
