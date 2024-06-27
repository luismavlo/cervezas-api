import { Router } from 'express'
import { BeerRoutes } from './beer/routes';

export class AppRoutes {

  static get routes(): Router {

    const router = Router()

    router.use('/api/v1/beer', BeerRoutes.routes)

    return router;

  }

}