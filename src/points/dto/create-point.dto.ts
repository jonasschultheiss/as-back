import { IsNotEmpty, IsString } from 'class-validator';
import { Availability } from '../availability.enum';

export class CreatePointDto {
  @IsString()
  @IsNotEmpty()
  readonly status: Availability;
}
