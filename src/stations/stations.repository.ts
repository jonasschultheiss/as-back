import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Price } from 'src/prices/price.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { PatchStationDto } from './dto/patch-station.dto';
import { Station } from './station.entity';

@EntityRepository(Station)
export class StationsRepository extends Repository<Station> {
  async createStation(createStationDto: CreateStationDto, prices: Price[]): Promise<Station> {
    const { name, address, city, latitude, longitude } = createStationDto;

    const station = new Station();
    station.name = name;
    station.address = address;
    station.city = city;
    station.latitude = latitude;
    station.longitude = longitude;
    station.prices = prices;

    try {
      await station.save();
      return station;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateOne(id: number, patchStationDto: PatchStationDto, prices: Price[]): Promise<Station> {
    const { name } = patchStationDto;
    const station = await this.findOne(id);
    if (!station) {
      throw new NotFoundException();
    }

    if (name) {
      station.name = name;
    }

    station.prices = prices;

    try {
      await station.save();
      return station;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
