import { Request, Response } from "express";
declare const versionController: {
    getAllVersions: (req: Request, res: Response) => Promise<void>;
    getVersionById: (req: Request, res: Response) => Promise<void>;
    deleteVersionById: (req: Request, res: Response) => Promise<void>;
    updateVersionById: (req: Request, res: Response) => Promise<void>;
};
export default versionController;
