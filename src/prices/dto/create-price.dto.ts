import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePriceDto {
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly currency: string;
}
