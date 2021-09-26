import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { Station } from './model.entity';
import { StationsRepository } from './stations.repository';

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(StationsRepository)
    private readonly stationsRepository: StationsRepository,
  ) {}

  async create(createStationDto: CreateStationDto): Promise<Station> {
    return this.stationsRepository.createStation(createStationDto);
  }
}
