import { Router } from "express";
import mealFactory from "../modules/meal/meal.factory.js";

const router = Router();

router.post("/api/meal", (req, res, next) =>
  mealFactory().create(req, res, next)
);

router.get("/api/meal", (req, res, next) =>
  mealFactory().findAll(req, res, next)
);

router.put('/api/meal/:id', (req, res, next) => {
  mealFactory().update(req, res, next);
});

router.delete('/api/meal/:id', (req, res, next) => {
  mealFactory().deleteByID(req, res, next);
});

export default router;
