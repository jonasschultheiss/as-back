import { Station } from 'src/stations/station.entity';
import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryColumn()
  product_id: string;

  @ManyToOne(() => Station, station => station.products)
  station: Station;
}
