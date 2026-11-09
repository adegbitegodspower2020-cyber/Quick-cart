// app.ts 
// Creates the Express app: settings first, then all the /api routes, then the "not found" 

// Step 3 create the express App
// The Express app: allow the website to call us (CORS), read JSON bodies, server uploaded photos, put every route under / api, then the 404 and error handlers
import express from "express";
import {env} from "./config/env"

const app =  express();


app.use(express.json());

export default app
// Next: STEP 4 (handle unkonwn URLs and errors) -> server/src/middleware/notFound.ts
