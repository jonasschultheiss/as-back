import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricesModule } from 'src/prices/prices.module';
import { ProductsModule } from 'src/products/products.module';
import { StationsController } from './stations.controller';
import { StationsRepository } from './stations.repository';
import { StationsService } from './stations.service';

@Module({
  imports: [TypeOrmModule.forFeature([StationsRepository]), PricesModule, ProductsModule],
  controllers: [StationsController],
  providers: [StationsService],
})
export class StationsModule {}
