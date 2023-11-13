import express, { Request, Response, Router } from "express";
import app from "../app.js";
import things from "../features/things/data/things.js";

const thingsRouter = Router();

thingsRouter.get("/", (_req, res) => {
  res.status(200).json({ things });
});

export default thingsRouter;
