import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointsModule } from 'src/points/points.module';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsRepository]), PointsModule],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
