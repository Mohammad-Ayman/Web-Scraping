// routes/fetchRoute.js
import express, { Request, Response } from "express";
import { saveVersions, saveVariants } from "../utils/savingToDb.js";

const router = express.Router();

router.get(
  "/versions/:app/:packageName",
  async (req: Request, res: Response) => {
    const { app, packageName } = req.params;
    console.log(app);
    let versions = await saveVersions(app, packageName);

    res.send(`Versions of ${app}/${packageName} fetched and saved!`);
  }
);

router.get("/variants/:versionId", async (req: Request, res: Response) => {
  let { versionId } = req.params;
  let variants = await saveVariants(versionId.trim());

  res.send(`Variants with ${versionId.trim()} fetched and saved!`);
});

export default router;
