import { Station } from 'src/stations/station.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('prices')
export class Price extends BaseEntity {
  @PrimaryColumn({ type: 'numeric' })
  price: number;

  @Column()
  currency: string;

  @Column()
  product_id: string;

  @ManyToOne(() => Station, station => station.prices, { onDelete: 'SET NULL', cascade: true })
  station: Station;
}
