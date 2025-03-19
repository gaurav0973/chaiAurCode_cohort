import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URL) {
    console.error("MONGO_URL is not defined in the environment variables.");
    process.exit(0)
}
const db = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("MongoDB database is successfully connected");
        })
        .catch((err) => {
            console.error("Failed to connect to the database:", err);
        });
};

export default db;