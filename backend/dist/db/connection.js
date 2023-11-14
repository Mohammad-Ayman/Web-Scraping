"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongo = void 0;
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
// Connection URI
const uri = "mongodb+srv://mohd22:testifyme@cluster0.98be0ic.mongodb.net/?retryWrites=true&w=majority";
// const uri = `${process.env.DATABASE_URL}`;
// Connect to MongoDB
const connectToMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(uri);
});
exports.connectToMongo = connectToMongo;
// Get the default connection
const db = mongoose_1.default.connection;
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
exports.default = mongoose_1.default;
