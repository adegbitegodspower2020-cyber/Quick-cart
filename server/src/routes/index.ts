// routes/index.ts
// joins all the route files together app.ts puts these under / api

import { Router, Request, Response } from "express";
import categoryRoutes from "./categoryRoutes";
import productRoutes from "./productRoutes";
import accountRoutes from "./accountRoutes";
import promoRoutes from "./promoRoutes";
import orderRoutes from "./orderRoutes";
import reviewRoutes from "./reviewRoutes";
import newsletterRoutes from "./newsletterRoutes";
import adminRoutes from "./adminRoutes";

// Step 5: join the routes and add a health check
// one router joins all the route files. app.ts mounts it at/api, so a rout like e.g "/products" becomes /api/products

const router = Router();

// GET /api/health
router.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "QuickCart API is running" });
});
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes); // /api/products...
router.use("/account", accountRoutes);
router.use("/promo-codes", promoRoutes); // /api/promo-codes...
router.use("/orders", orderRoutes); // /api/orders...
router.use("/reviews", reviewRoutes); // /api/reviews...
router.use("/newsletter", newsletterRoutes); // /api/newsletter...
router.use("/admin", adminRoutes); // /api/admin... (admins only)

// Next: Step 6 (start the server) -> server/src/server.ts

export default router;
