import { ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePriceDto } from './dto/create-price.dto';
import { PatchPriceDto } from './dto/patch-price.dto';
import { Price } from './price.entity';

@EntityRepository(Price)
export class PricesRepository extends Repository<Price> {
  async createPrice(createPriceDto: CreatePriceDto): Promise<Price> {
    const { price: cost, currency } = createPriceDto;

    const price = new Price();
    price.price = cost;
    price.currency = currency;

    try {
      await price.save();
      return price;
    } catch (error) {
      if (error.code == 23505) {
        throw new ConflictException('Price already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async updateOne(patchPriceDto: PatchPriceDto): Promise<Price> {
    const { price: cost } = patchPriceDto;

    const price = await this.findOne(cost);
    if (!price) {
      throw new NotFoundException();
    }

    if (cost) {
      price.price = cost;
    }

    try {
      await price.save();
      return price;
    } catch (error) {
      if (error.code == 23505) {
        throw new ConflictException('Price already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
