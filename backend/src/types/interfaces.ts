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

export { Version, Variant };
