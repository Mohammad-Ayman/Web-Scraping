import "dotenv/config";
import mongoose from "mongoose";
export declare const connectToMongo: () => Promise<void>;
export declare const clearDatabase: () => Promise<void>;
export default mongoose;
