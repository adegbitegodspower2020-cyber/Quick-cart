// routes/index.ts
// joins all the route files together app.ts puts these under / api

import { Router } from "express";

// Step 5: join the routes and add a health check
// one router joins all the route files. app.ts mounts it at/api, so a rout like e.g "/products" becomes /api/products

const router = Router();

// GET /api/health: a quick check that the
router.get("health", (_req, res) => {
  res.json({ status: "ok", message: "QuickCart API is running" });
});

// Next: Step 6 (start the server) -> server/src/server.ts

export default router;
