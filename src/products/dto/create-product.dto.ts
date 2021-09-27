import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreatePointDto } from 'src/points/dto/create-point.dto';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly product_id: string;

  @IsArray()
  @ApiProperty()
  readonly points: CreatePointDto[];
}
