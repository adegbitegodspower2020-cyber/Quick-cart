// notFound
// Runs when no route matches the request, and replies with a 404 message

import { Request, Response } from "express";

// STEP 4: Handle unknown URLs and errors
// Runs when no route matched replies 404 as json. errorHandler.ts (same step) turns any thrown error into JSON reply instead of craashing

export const notFound = (req: Request, res: Response) => {
  res
    .status(404)
    .json({ message: `Not found ${req.method} ${req.originalUrl}` });
};

// Next: Step 5 (join the routes and add a health check) -> server/src/routes/index.ts

