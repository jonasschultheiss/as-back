import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricesRepository } from './prices.repository';
import { PricesService } from './prices.service';

@Module({
  imports: [TypeOrmModule.forFeature([PricesRepository])],
  providers: [PricesService],
  exports: [PricesService],
})
export class PricesModule {}
