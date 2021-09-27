import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PointsService } from 'src/points/points.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private readonly productsRepository: ProductsRepository,
    private readonly pointsService: PointsService,
  ) {}

  private async getOrCreate(createProductDto: CreateProductDto): Promise<Product> {
    const { product_id, points: inputPoints } = createProductDto;
    const found = await this.productsRepository.findOne(product_id);
    if (found) {
      return found;
    } else {
      const points = await this.pointsService.createPoints(inputPoints);
      return this.productsRepository.createProduct(createProductDto, points);
    }
  }

  async getOrCreateProducts(inputProducts: CreateProductDto[]): Promise<Product[]> {
    const products: Product[] = [];
    for await (const product of inputProducts) {
      products.push(await this.getOrCreate(product));
    }

    return products;
  }
}
