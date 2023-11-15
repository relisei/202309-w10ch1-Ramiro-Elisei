import { type Request, type Response } from "express";

class PingController {
  getPong(req: Request, res: Response) {
    res.status(200).json({ message: "🏓" });
  }
}

export default PingController;
