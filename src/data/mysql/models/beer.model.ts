
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Beer extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
    length: 40
  })
  name: string;

  @Column({
    nullable: false,
    length: 40
  })
  origin: string;

  @Column({
    nullable: false,
    length: 40
  })
  scent: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  lvlAlcohol: number;

  @Column({
    nullable: false,
    length: 40
  })
  brand: string;

  @Column({
    type: 'float',
    nullable: false,
  })
  price: number;
}