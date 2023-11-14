import app from "./app.js";
import morgan from "morgan";
import thingsRouter from "./router/thingsRouter.js";

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
