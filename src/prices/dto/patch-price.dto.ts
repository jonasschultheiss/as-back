import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class PatchPriceDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly oldPrice: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly newPrice: number;
}
