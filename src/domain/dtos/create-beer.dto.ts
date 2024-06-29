

export class CreateBeerDTO {

  private constructor(
    public readonly name: string,
    public readonly origin: string,
    public readonly scent: string,
    public readonly lvlAlcohol: number,
    public readonly brand: string,
    public readonly price: number,
  ){}

  static create( object: { [key: string]: any } ): [string?, CreateBeerDTO?]{
    const { name, origin, scent, lvlAlcohol, brand, price } = object;

    if( !name ) return ['missing name']
    if( name.length > 40 ) return [ 'name is too long']
    if( !origin ) return ['missing origin']
    if( origin.length > 40 ) return [ 'origin is too long']
    if( !scent ) return ['missing scent']
    if( scent.length > 40 ) return [ 'scent is too long']
    if( !lvlAlcohol ) return ['missing lvlAlcohol']
    if( !brand ) return ['missing brand']
    if( brand.length > 40 ) return [ 'brand is too long']
    if( !price ) return ['missing price']

    return [undefined, new CreateBeerDTO(name, origin, scent, lvlAlcohol, brand, price)]

  }

}