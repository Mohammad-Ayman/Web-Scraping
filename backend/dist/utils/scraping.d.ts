import { Version, Variant } from "../types/interfaces";
export declare const scrapeVersions: () => Promise<Version[] | undefined>;
export declare const scrapeVariants: (versionId: string) => Promise<Variant[] | undefined>;
