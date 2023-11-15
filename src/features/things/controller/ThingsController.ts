import { type Request, type Response } from "express";
import ThingsRepository from "../repository/ThingsRepository.js";

const thingsRepository = new ThingsRepository();

class ThingsController {
  public getThings(_req: Request, res: Response) {
    const things = thingsRepository.getThings();

    res.status(200).json({ things });
  }

  public getThingsId(req: Request, res: Response) {
    const { thingId } = req.params;
    try {
      const thing = thingsRepository.getThingsId(+thingId);
      res.status(200).json({ thing });
    } catch {
      res.status(404).json({ error: "Thing not found" });
    }
  }
}

export default ThingsController;
