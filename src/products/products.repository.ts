import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { product_id } = createProductDto;

    const product = new Product();
    product.product_id = product_id;

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
