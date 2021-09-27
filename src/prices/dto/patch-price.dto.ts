import { IsNotEmpty, IsNumber } from 'class-validator';

export class PatchPriceDto {
  @IsNumber()
  @IsNotEmpty()
  readonly oldPrice: number;

  @IsNumber()
  @IsNotEmpty()
  readonly newPrice: number;
}
