import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private readonly productsRepository: ProductsRepository,
  ) {}

  async getOrCreate(createProductDto: CreateProductDto): Promise<Product> {
    const { product_id } = createProductDto;
    const found = await this.productsRepository.findOne(product_id);
    if (found) {
      return found;
    } else {
      return this.productsRepository.createProduct(createProductDto);
    }
  }
}
