import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PatchPriceDto } from 'src/prices/dto/patch-price.dto';

export class PatchStationDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  readonly name: string;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  readonly prices: PatchPriceDto[];
}
