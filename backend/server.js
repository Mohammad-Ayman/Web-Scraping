const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeInstagramAPKs() {
  try {
    const response = await axios.get(
      "https://www.apkmirror.com/apk/instagram/instagram-instagram/"
    );

    const versions = [];
    const limit = 10; // Set the desired limit
    const $ = cheerio.load(response.data);

    // Iterate over individual APK rows
    $(".appRow .table-row").each((index, element) => {
      if (index < limit) {
        // Extract the version information
        const versionInfo = $(element)
          .find(".appRowTitle.wrapText.marginZero.block-on-mobile")
          .text()
          .trim();

        // Extract the release date
        const versionReleaseDate = $(element)
          .find(".dateyear_utc")
          .text()
          .trim();

        // Push the version information and release date as an object to the array
        versions.push({
          version: versionInfo,
          releaseDate: versionReleaseDate,
        });
      }
    });

    // Log the array of version information
    console.log(versions);
  } catch (error) {
    console.error("Error during scraping:", error.message);
  }
}

// Uncomment the line below to trigger the function
scrapeInstagramAPKs();

// const axios = require("axios");
// const cheerio = require("cheerio");

// let versions = [];
// async function scrapeInstagramAPKs() {
//   try {
//     const response = await axios.get(
//       "https://www.apkmirror.com/apk/instagram/instagram-instagram/"
//     );

//     const $ = cheerio.load(response.data);
//     let x = $("#primary > div.listWidget.p-relative").text();
//     // Assuming you want to extract information about each APK variant
//     $("#primary > div.listWidget.p-relative").each((index, element) => {
//       const rawText = $(element)
//         .find(".appRowTitle.wrapText.marginZero.block-on-mobile")
//         .text()
//         .trim();
//       const versionInfoArray = rawText.split("\n").map((item) => item.trim());

//       // Extract the release date
//       const versionReleaseDate = $(element)
//         .find(".dateyear_utc")
//         .first() // Use first() to get only the first occurrence
//         .text()
//         .trim();

//       // Process each version separately
//       versionInfoArray.forEach((version) => {
//         versions.push({ version, releaseDate: versionReleaseDate });
//       });
//     });
//     console.log(versions[0]);
//   } catch (error) {
//     console.error("Error during scraping:", error.message);
//   }
// }

// // Uncomment the line below to trigger the function
// scrapeInstagramAPKs();
