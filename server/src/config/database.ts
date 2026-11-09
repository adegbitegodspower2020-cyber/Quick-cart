// database.ts
// connnects to MongoDB using the MONGO_URI FROM The .env file

import mongoose from "mongoose";
import { env } from "./env";

// STEP 2: connect to MongoDb
// connectDB() opens the connection to MongoDB with the address from .env. server.ts calls before the API starts.

export const connectDB =  async () => {
    const connection = await mongoose.connect(env.mongoUri)
    console.log(`MongoDB connected: ${connection.connection.host}`);
}

// NEXT: STEP 3 (Creates the Express app) -> server/src/app.ts