import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreatePriceDto } from 'src/prices/dto/create-price.dto';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

export class CreateStationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly city: string;

  @IsLatitude()
  @IsNumber()
  @ApiProperty()
  readonly latitude: number;

  @IsLongitude()
  @IsNumber()
  @ApiProperty()
  readonly longitude: number;

  @IsArray()
  @ApiProperty()
  readonly prices: CreatePriceDto[];

  @IsArray()
  @ApiProperty()
  readonly products: CreateProductDto[];
}
