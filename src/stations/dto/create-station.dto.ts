import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStationDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsLatitude()
  @IsNumber()
  readonly latitude: number;

  @IsLongitude()
  @IsNumber()
  readonly longitude: number;
}
