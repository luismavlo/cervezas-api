

import { Router, Request, Response } from 'express';
import { BeerController } from './controller';
import { BeerService } from '../services/beer.service';


export class BeerRoutes {
  
  static get routes(): Router {
    const router = Router();

    const beerService = new BeerService();
    const beerContreller = new BeerController(beerService);

    router.get('/', beerContreller.getBeers)
    router.post('/', beerContreller.createBeer)
    router.get('/:id', beerContreller.getBeer)
    router.patch('/:id', beerContreller.updateBeer)
    router.delete('/:id', beerContreller.deleteBeer)
    
    return router;
  }

}

