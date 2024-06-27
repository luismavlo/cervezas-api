

import { Router, Request, Response } from 'express';


export class BeerRoutes {
  
  static get routes(): Router {
    const router = Router();

    router.get('/', (req: Request, res: Response) => {
      res.json({ok: true})
    })
    router.post('/', (req: Request, res: Response) => {
      res.json({ok: true})
    })
    router.get('/:id', (req: Request, res: Response) => {
      res.json({ok: true})
    })
    router.patch('/:id', (req: Request, res: Response) => {
      res.json({ok: true})
    })
    router.delete('/:id', (req: Request, res: Response) => {
      res.json({ok: true})
    })

    return router;
  }

}

