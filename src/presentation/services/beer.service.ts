import { CreateBeerDTO } from '../../domain'

//importar el modelo

export class BeerService {
  
  async getBeers(){
    return 'getBeers'
  }

  async createBeer(crateBeerDTO: CreateBeerDTO){
    return crateBeerDTO
  }
  
  async getBeer(id: number){
    return 'getBeer'
  }

  async updateBeer(crateBeerDTO: CreateBeerDTO, id: number){
    return 'updateBeer'
  }

  async deleteBeer(id: number){
    return 'deleteBeer'
  }


  //se van a crear un metodo para cada uno de los metodos de los controladores
  //retornar una palabra;
}

