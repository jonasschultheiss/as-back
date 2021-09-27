import { Point } from 'src/points/point.entity';
import { Station } from 'src/stations/station.entity';
import { BaseEntity, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryColumn()
  product_id: string;

  @ManyToOne(() => Station, station => station.products, { onDelete: 'CASCADE', cascade: true })
  station: Station;

  @OneToMany(() => Point, point => point.product, { eager: true })
  points: Point[];
}
