import { Station } from 'src/stations/station.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('prices')
export class Price extends BaseEntity {
  @PrimaryColumn('money')
  price: number;

  @Column()
  currency: string;

  @ManyToOne(() => Station, station => station.prices)
  station: Station;
}
