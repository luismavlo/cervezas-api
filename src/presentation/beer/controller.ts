import { Request, Response } from 'express'
import { BeerService } from '../services/beer.service'
import { CreateBeerDTO } from '../../domain'


export class BeerController {

  constructor(private readonly beerService: BeerService) {}

  getBeers = (req: Request, res: Response) => {
     this.beerService.getBeers()
      .then((data) => res.status(200).json(data))
      .catch(error => res.status(500).json({message: error})) 
  }

  createBeer = (req: Request, res: Response) => {
    
    const [error, createBeerDTO ] = CreateBeerDTO.create(req.body);
    if( error ) return res.status(422).json({message: error})

    console.log(createBeerDTO?.name.length)

    this.beerService.createBeer(createBeerDTO!)
      .then((data) => res.status(201).json(data))
      .catch(error => res.status(500).json({message: error}))
  }

  getBeer = (req: Request, res: Response) => {
    this.beerService.getBeer()
      .then((data) => res.status(200).json(data))
      .catch(error => res.status(500).json({message: error}))
  }

  updateBeer = (req: Request, res: Response) => {
    this.beerService.updateBeer()
      .then((data) => res.status(200).json(data))
      .catch(error => res.status(500).json({message: error}))
  }

  deleteBeer = (req: Request, res: Response) => {
    this.beerService.deleteBeer()
      .then((data) => res.status(200).json(data))
      .catch(error => res.status(500).json({message: error}))
  }

}