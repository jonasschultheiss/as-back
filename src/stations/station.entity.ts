import { Price } from 'src/prices/price.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('stations')
@Unique(['id'])
export class Station extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column('float8')
  latitude: number;

  @Column('float8')
  longitude: number;

  @OneToMany(() => Price, price => price.station)
  prices: Price[];
}
