import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePriceDto } from 'src/prices/dto/create-price.dto';
import { Price } from 'src/prices/price.entity';
import { PricesService } from 'src/prices/prices.service';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { Product } from 'src/products/product.entity';
import { ProductsService } from 'src/products/products.service';
import { CreateStationDto } from './dto/create-station.dto';
import { PatchStationDto } from './dto/patch-station.dto';
import { Station } from './station.entity';
import { StationsRepository } from './stations.repository';

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(StationsRepository)
    private readonly stationsRepository: StationsRepository,
    private readonly pricesService: PricesService,
    private readonly productsSersvice: ProductsService,
  ) {}

  private async getOrCreatePrices(inputPrices: CreatePriceDto[]): Promise<Price[]> {
    const prices: Price[] = [];
    for await (const price of inputPrices) {
      prices.push(await this.pricesService.getOrCreate(price));
    }

    return prices;
  }

  private async getOrCreateProducts(inputProducts: CreateProductDto[]): Promise<Product[]> {
    const products: Product[] = [];
    for await (const product of inputProducts) {
      products.push(await this.productsSersvice.getOrCreate(product));
    }

    return products;
  }

  async create(createStationDto: CreateStationDto): Promise<Station> {
    const { prices: inputPrices, products: inputProducts } = createStationDto;
    const prices = await this.getOrCreatePrices(inputPrices);
    const products = await this.getOrCreateProducts(inputProducts);

    return this.stationsRepository.createStation(createStationDto, prices, products);
  }

  async findAll(): Promise<Station[]> {
    return this.stationsRepository.find();
  }

  async findOne(id: number): Promise<Station> {
    const station = await this.stationsRepository.findOne(id);
    if (!station) {
      throw new NotFoundException(`Could not find fuel station with id: ${id}`);
    }

    return station;
  }

  async updateOne(id: number, patchStationDto: PatchStationDto): Promise<Station> {
    const { prices: inputPrices } = patchStationDto;
    const prices: Price[] = [];
    for await (const price of inputPrices) {
      prices.push(await this.pricesService.updateOne(price));
    }

    return this.stationsRepository.updateOne(id, patchStationDto, prices);
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.stationsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Could not find fuel station with id: ${id}`);
    }
  }
}
