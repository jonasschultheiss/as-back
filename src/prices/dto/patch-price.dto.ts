import { IsNotEmpty, IsNumber } from 'class-validator';

export class PatchPriceDto {
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
}
