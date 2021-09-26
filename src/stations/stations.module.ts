import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationsController } from './stations.controller';
import { StationsRepository } from './stations.repository';
import { StationsService } from './stations.service';

@Module({
  imports: [TypeOrmModule.forFeature([StationsRepository])],
  controllers: [StationsController],
  providers: [StationsService],
})
export class StationsModule {}
