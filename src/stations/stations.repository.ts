import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { Station } from './model.entity';

@EntityRepository(Station)
export class StationsRepository extends Repository<Station> {
  async createStation(createStationDto: CreateStationDto): Promise<Station> {
    const { name, address, city, latitude, longitude } = createStationDto;

    const station = new Station();
    station.name = name;
    station.address = address;
    station.city = city;
    station.latitude = latitude;
    station.longitude = longitude;

    try {
      await station.save();
      return station;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
