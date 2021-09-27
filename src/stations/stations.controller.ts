import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiSecurity } from '@nestjs/swagger';
import { CreateStationDto } from './dto/create-station.dto';
import { PatchStationDto } from './dto/patch-station.dto';
import { Station } from './station.entity';
import { StationsService } from './stations.service';

@UseGuards(AuthGuard('api-key'))
@ApiHeader({
  name: 'X-API-KEY',
  description: 'API-Key Header',
})
@ApiSecurity('API-KEY')
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
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Station> {
    return this.stationsService.findOne(+id);
  }

  @Patch(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) patchStationDto: PatchStationDto,
  ): Promise<Station> {
    return this.stationsService.updateOne(id, patchStationDto);
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.stationsService.deleteOne(id);
  }
}
