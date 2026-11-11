// env.ts
// reads the Settings from the .env file in one place, so the rest of the code uses `env.port`, `env.mongoUri`, etc
import dotenv from "dotenv";

dotenv.config({ quiet: true });
// ===Step 1: Read the setting from .env
// All settings (port, database address, JWT secret....) are read from.env here, once, so, the rest of the code uses env.port env.monogoUri and so on.

// STEP 2 (connect to mongodb) -> server/src/config/database.ts

export const env = {
  port: Number(process.env.PORT) || 5000,
  mongoUri:
    process.env.MONGO_URI ||
    "mongodb+srv://adegbitegodspower2020_db_user:SwzObYsF46KlvUeH@cluster0.bn3mace.mongodb.net/quickcart",
  JwtSecret: process.env.JWT_SECRET || "dev-secret-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "15d", // "Remain logged in for for 15 days"
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  // the hidden demo panel (reset the data, move orders along) for presentations
  // On while developing (npm run dev... runs the. ts files); off the built site (npm start runs .js from dist)
  // unless DEMO_MODE=true is set. DEMO_MODE=false always turn off.

  demoMode: process.env.DEMO_MODE
    ? process.env.DEMO_MODE === "true"
    : __filename.endsWith(".ts"),

  // Cloudinary stores the product photos (see config/cloudinary.ts). Empty = use the photo in client/public

  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || "",
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || "",
};
