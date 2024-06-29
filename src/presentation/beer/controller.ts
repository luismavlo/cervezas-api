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
    const { id } = req.params;
    if( isNaN(+id)) {
      return res.status(400).json({message: 'El id debe ser un numero'});
    }

    this.beerService.getBeer(+id)
      .then((data) => res.status(200).json(data))
      .catch(error => res.status(500).json({message: error.message}))
  }

  updateBeer = (req: Request, res: Response) => {
    const { id } = req.params;
    const [error, createBeerDTO ] = CreateBeerDTO.create(req.body);

    if( isNaN(+id)) {
      return res.status(400).json({message: 'El id debe ser un numero'});
    }

    if( error ) return res.status(422).json({message: error})

    this.beerService.updateBeer(createBeerDTO!, +id)
      .then((data) => res.status(200).json(data))
      .catch(error => res.status(500).json({message: error.message}))
  }

  deleteBeer = (req: Request, res: Response) => {
    const { id } = req.params;
    if( isNaN(+id)) {
      return res.status(400).json({message: 'El id debe ser un numero'});
    }

    this.beerService.deleteBeer(+id)
      .then((data) => res.status(200).json(data))
      .catch(error => res.status(500).json({message: error.message}))
  }

}