import { Request, Response } from 'express'

export class HelloController {
  getMessage (req: Request, res: Response): void {
    res.send('hello world')
  }
}
