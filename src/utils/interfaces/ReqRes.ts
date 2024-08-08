import { Request, Response } from "express"

export default interface ReqRes {
  (req: Request, res: Response): void
}
