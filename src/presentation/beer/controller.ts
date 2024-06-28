import { Request, Response } from 'express'


export class BeerController {

  constructor() {}

  getBeers = (req: Request, res: Response) => {
    res.json({ok: true})
  }

  createBeer = (req: Request, res: Response) => {
    res.json({ok: true})
  }

  getBeer = (req: Request, res: Response) => {
    res.json({ok: true})
  }

  updateBeer = (req: Request, res: Response) => {
    res.json({ok: true})
  }

  deleteBeer = (req: Request, res: Response) => {
    res.json({ok: true})
  }

}