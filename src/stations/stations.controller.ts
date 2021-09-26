import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { Station } from './model.entity';
import { StationsService } from './stations.service';

@Controller('stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Post()
  async create(@Body(ValidationPipe) createStationDto: CreateStationDto): Promise<Station> {
    return this.stationsService.create(createStationDto);
  }
}
