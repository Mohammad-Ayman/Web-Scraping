import axios from "axios";
import cheerio from "cheerio";
import { Version, Variant } from "../types/interfaces";

export const scrapeVersions = async () => {
  try {
    const response = await axios.get(
      "https://www.apkmirror.com/apk/instagram/instagram-instagram/"
    );

    const versions: Version[] = [];
    const limit = 10; // Set the desired limit
    const $ = cheerio.load(response.data);

    const promises: Promise<void>[] = [];

    // Iterate over individual APK rows
    $(".appRow .table-row").each(async (index, e) => {
      if (index < limit) {
        const promise = new Promise<void>((resolve) => {
          // Extract the version information
          const versionInfo = $(e)
            .find(".appRowTitle.wrapText.marginZero.block-on-mobile")
            .text()
            .trim();

          // Extract the release date
          const trimmedReleaseDate = $(e)
            .find(".dateyear_utc")
            .attr("data-utcdate");
          const versionReleaseDate = trimmedReleaseDate
            ? trimmedReleaseDate.trim()
            : "";

          const variantsCount = $(e).find(".appRowVariantTag").text().trim();
          const variantsURLe = $(e).find(".appRowVariantTag a").attr("href");
          const variantsURL = variantsURLe ? variantsURLe.trim() : "";
          versions.push({
            version: versionInfo.split(" ")[1],
            releaseDate: versionReleaseDate,
            variantsCount: +variantsCount.split(" ")[0],
            variantsURL,
          });

          resolve();
        });

        // Add the promise to the array
        promises.push(promise);
      }
    });

    // Wait for all promises to resolve
    await Promise.all(promises);
    // Log the array of version information
    console.log("versions", versions);
    return versions;
  } catch (error: any) {
    console.error("Error during scraping versions:", error.message);
  }
};

export const scrapeVariants = async (url: string, versionId: string) => {
  try {
    const completeURL = `https://www.apkmirror.com${url}`;
    const response = await axios.get(completeURL);

    const variants: Variant[] = [];
    const $ = cheerio.load(response.data);

    // Iterate over individual APK rows
    $(".variants-table .table-row:not(:first-child)").each((index, e) => {
      // Extract the variant information
      // console.log($(e).text());
      const variantId = $(e)
        .find(".table-cell:eq(0) .colorLightBlack:eq(0)")
        .text()
        .trim();

      // Extract the architecture
      const variantArchitecture = $(e).find(".table-cell:eq(1)").text().trim();

      const variantMinAndroidVersion = $(e)
        .find(".table-cell:eq(2)")
        .text()
        .trim();
      const variantDpi = $(e).find(".table-cell:eq(3)").text().trim();
      // Push the variant information as an object to the array
      variants.push({
        versionId: versionId,
        variantId,
        variantArchitecture: variantArchitecture,
        variantMinAndroidVersion: variantMinAndroidVersion,
        dpi: variantDpi,
      });
    });

    // Log the array of version information
    console.log("variants", variants);
    return variants;
  } catch (error: any) {
    console.error("Error during scraping variants:", error.message);
  }
};
