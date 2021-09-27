import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Point } from 'src/points/point.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
  async createProduct(createProductDto: CreateProductDto, points: Point[]): Promise<Product> {
    const { product_id } = createProductDto;

    const product = new Product();
    product.product_id = product_id;
    product.points = points;

    try {
      await product.save();
      return product;
    } catch (error) {
      if (error.code == 23505) {
        throw new ConflictException('Product already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
