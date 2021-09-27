import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PatchPriceDto } from 'src/prices/dto/patch-price.dto';

export class PatchStationDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly name: string;

  @IsArray()
  @IsOptional()
  readonly prices: PatchPriceDto[];
}
