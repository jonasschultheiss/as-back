import { Product } from 'src/products/product.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Availability } from './availability.enum';

@Entity('points')
export class Point extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: Availability;

  @ManyToOne(() => Product, product => product.points)
  product: Product;
}
