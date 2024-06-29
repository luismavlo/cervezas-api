

export class CreateBeerDTO {

  constructor(
    public readonly name: string,
    public readonly origin: string,
    public readonly scent: string,
    public readonly lvlAlcohol: number,
    public readonly brand: string,
    public readonly price: number,
  ){}

}