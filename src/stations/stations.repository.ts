import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { PatchStationDto } from './dto/patch-station.dto';
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

  async updateOne(id: number, patchStationDto: PatchStationDto): Promise<Station> {
    const { name } = patchStationDto;
    const station = await this.findOne(id);
    if (!station) {
      throw new NotFoundException();
    }

    if (name) {
      station.name = name;
    }

    try {
      await station.save();
      return station;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
