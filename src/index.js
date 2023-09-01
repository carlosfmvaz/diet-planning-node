import express from "express";
import userRouter from "./routes/user.router.js";
import mealRouter from "./routes/meal.router.js";
import errorHandler from "./middlewares/error-handler.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(userRouter);
app.use(mealRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(errorHandler);
