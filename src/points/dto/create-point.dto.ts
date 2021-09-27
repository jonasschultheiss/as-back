import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Availability } from '../availability.enum';

export class CreatePointDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly status: Availability;
}
