import { IsArray, IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreatePriceDto } from 'src/prices/dto/create-price.dto';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

export class CreateStationDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsLatitude()
  @IsNumber()
  readonly latitude: number;

  @IsLongitude()
  @IsNumber()
  readonly longitude: number;

  @IsArray()
  readonly prices: CreatePriceDto[];

  @IsArray()
  readonly products: CreateProductDto[];
}
