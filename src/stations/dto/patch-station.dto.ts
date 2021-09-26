import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PatchStationDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly name: string;
}
