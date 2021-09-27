import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePriceDto } from './dto/create-price.dto';
import { PatchPriceDto } from './dto/patch-price.dto';
import { Price } from './price.entity';
import { PricesRepository } from './prices.repository';

@Injectable()
export class PricesService {
  constructor(
    @InjectRepository(PricesRepository)
    private readonly pricesRepository: PricesRepository,
  ) {}

  async getOrCreate(createPriceDto: CreatePriceDto): Promise<Price> {
    const { price } = createPriceDto;
    const found = this.pricesRepository.findOne(price);
    if (found) {
      return found;
    } else {
      return this.pricesRepository.createPrice(createPriceDto);
    }
  }

  async updateOne(patchPriceDto: PatchPriceDto): Promise<Price> {
    return this.pricesRepository.updateOne(patchPriceDto);
  }
}
