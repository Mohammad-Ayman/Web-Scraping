import express from "express";
import axios from "axios";
import cheerio from "cheerio";

const app = express();
const port = 3000;

app.get("/versions", async (req, res) => {
  console.log("Handling /fetch request");
  try {
    const response = await axios.get(
      "https://www.apkmirror.com/apk/instagram/instagram-instagram/"
    );

    const versions = [];
    const limit = 10; // Set the desired limit
    const $ = cheerio.load(response.data);

    // Iterate over individual APK rows
    $(".appRow .table-row").each(async (index, e) => {
      if (index < limit) {
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
      }
    });

    // Log the array of version information
    console.log("versions", versions);
    return versions;
  } catch (error) {
    console.error("Error during scraping versions:", error.message);
  }
});

const server = app.listen(port, async () => {
  console.log(`App running on http://localhost:${port}`);
});
