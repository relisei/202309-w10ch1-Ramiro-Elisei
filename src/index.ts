import morgan from "morgan";
import app from "./app.js";
import { notFound } from "./middlewares/errorMiddlewares.js";
import thingsRouter from "./features/things/router/thingsRouter.js";
import pingRouter from "./features/ping/router/pingRouter.js";

app.use(morgan("dev"));

app.get("/", pingRouter);

app.use("/things", thingsRouter);

app.use(notFound);
