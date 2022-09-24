import { Request, Response } from "express";

export class HelloController {
  getMessage(req: Request, res: Response) {
    res.send("hello world")
  }
}