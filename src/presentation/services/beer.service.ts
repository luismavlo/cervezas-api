import { Beer } from '../../data';
import { CreateBeerDTO } from '../../domain'

//importar el modelo

export class BeerService {
  
  async getBeers(){
    return 'getBeers'
  }

  async createBeer(crateBeerDTO: CreateBeerDTO){
    const beer = new Beer();

    beer.name = crateBeerDTO.name;
    beer.origin = crateBeerDTO.origin;
    beer.scent = crateBeerDTO.scent;
    beer.lvlAlcohol = crateBeerDTO.lvlAlcohol;
    beer.brand = crateBeerDTO.brand;
    beer.price = crateBeerDTO.price;

    try {
      return await beer.save();
    } catch (error) {
      throw new Error("Internal Server Error");
      
    }
  }
  
  async getBeer(id: number){
    const beer = await Beer.findOne({
      where: {
        id: id
      }
    });

    if(!beer) throw new Error('No se encontro el registro');

    return beer
  }

  async updateBeer(crateBeerDTO: CreateBeerDTO, id: number){
    const beer = await this.getBeer(id);

    beer.name = crateBeerDTO.name;
    beer.origin = crateBeerDTO.origin;
    beer.scent = crateBeerDTO.scent;
    beer.lvlAlcohol = crateBeerDTO.lvlAlcohol;
    beer.brand = crateBeerDTO.brand;
    beer.price = crateBeerDTO.price;

    try {
      return await beer.save();
    } catch (error) {
      console.log(error);
      throw new Error("Internal Server Error");
    }


  }

  async deleteBeer(id: number){
    return 'deleteBeer'
  }
}

