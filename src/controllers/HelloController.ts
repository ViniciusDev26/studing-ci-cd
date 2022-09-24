import { Request, Response } from "express";

export class HelloController {
  getMessage(req: Request, res: Response) {
    res.hend("hello world")
  }
}