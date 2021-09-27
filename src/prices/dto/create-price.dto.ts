import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePriceDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly currency: string;

  @IsString()
  @IsNotEmpty()
  readonly product_id: string;
}
