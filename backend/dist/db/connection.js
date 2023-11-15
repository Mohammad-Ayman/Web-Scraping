var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "dotenv/config";
import mongoose from "mongoose";
// Connection URI
const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.98be0ic.mongodb.net/?retryWrites=true&w=majority`;
// Connect to MongoDB
export const connectToMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connect(uri);
});
// Get the default connection
const db = mongoose.connection;
// Event handling for connection success
db.on("connected", () => {
    console.log("Mongoose connected to MongoDB");
});
// Event handling for connection error
db.on("error", (err) => {
    console.error("Mongoose connection error:", err);
});
// Event handling for disconnection
db.on("disconnected", () => {
    console.log("Mongoose disconnected");
});
// // Close the Mongoose connection when the Node.js application is terminated
// process.on("SIGINT", () => {
//   db.close(() => {
//     console.log("Mongoose connection closed due to application termination");
//     process.exit(0);
//   });
// });
export const clearDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const { collections } = mongoose.connection;
    const mongooseDeletePromises = [];
    for (const key in collections) {
        mongooseDeletePromises.push(collections[key].deleteMany());
    }
    yield Promise.all(mongooseDeletePromises);
    console.log("deleted");
});
export default mongoose;
