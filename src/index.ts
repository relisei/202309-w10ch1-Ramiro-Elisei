import morgan from "morgan";
import app from "./app.js";
import { notFound } from "./middlewares/errorMiddlewares.js";
import thingsRouter from "./features/things/router/thingsRouter.js";

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.use(notFound);
