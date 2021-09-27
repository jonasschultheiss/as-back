import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePointDto } from 'src/points/dto/create-point.dto';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly product_id: string;

  readonly points: CreatePointDto[];
}
