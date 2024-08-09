import { Request, Response, NextFunction } from "express"

export default interface HTTPMiddleware {
  (req: Request, res: Response, next: NextFunction): void
}
