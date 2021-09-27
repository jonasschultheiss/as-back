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
    const { oldPrice, newPrice } = patchPriceDto;

    const newAlreadyExists = await this.findOne(newPrice);
    if (newAlreadyExists) {
      return newAlreadyExists;
    }

    const price = await this.findOne(oldPrice);

    if (!price) {
      throw new NotFoundException();
    }

    if (newPrice) {
      price.price = newPrice;
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
