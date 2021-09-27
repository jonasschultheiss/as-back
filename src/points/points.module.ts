import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointsRepository } from './points.repository';
import { PointsService } from './points.service';

@Module({
  imports: [TypeOrmModule.forFeature([PointsRepository])],
  providers: [PointsService],
  exports: [PointsService],
})
export class PointsModule {}
