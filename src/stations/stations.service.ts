import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { PatchStationDto } from './dto/patch-station.dto';
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

  async findAll(): Promise<Station[]> {
    return this.stationsRepository.find();
  }

  async findOne(id: number): Promise<Station> {
    const station = await this.stationsRepository.findOne(id);
    if (!station) {
      throw new NotFoundException(`Could not find fuel station with id: ${id}`);
    }

    return station;
  }

  async updateOne(id: number, patchStationDto: PatchStationDto): Promise<Station> {
    return this.stationsRepository.updateOne(id, patchStationDto);
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.stationsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Could not find fuel station with id: ${id}`);
    }
  }
}
