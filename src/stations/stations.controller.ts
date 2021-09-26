import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { PatchStationDto } from './dto/patch-station.dto';
import { Station } from './model.entity';
import { StationsService } from './stations.service';

@Controller('stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Post()
  async create(@Body(ValidationPipe) createStationDto: CreateStationDto): Promise<Station> {
    return this.stationsService.create(createStationDto);
  }

  @Get()
  async findAll(): Promise<Station[]> {
    return this.stationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Station> {
    return this.stationsService.findOne(+id);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body(ValidationPipe) patchStationDto: PatchStationDto): Promise<Station> {
    return this.stationsService.updateOne(+id, patchStationDto);
  }
}
