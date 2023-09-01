import { Router } from "express";
import userFactory from "../modules/users/user.factory.js";

const router = Router();

router.post("/api/user/login", (req, res) =>
  res.send("Hello World!" + req.params.id)
);

router.post("/api/user/register", (req, res, next) =>
  userFactory().register(req, res, next)
);

router.get("/api/user/:id", (req, res, next) =>
  userFactory().getUserData(req, res, next)
);

export default router;
