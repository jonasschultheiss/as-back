import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePointDto } from './dto/create-point.dto';
import { Point } from './point.entity';
import { PointsRepository } from './points.repository';

@Injectable()
export class PointsService {
  constructor(
    @InjectRepository(PointsRepository)
    private readonly pointsRepository: PointsRepository,
  ) {}

  private async create(createPointDto: CreatePointDto): Promise<Point> {
    return this.pointsRepository.createPoint(createPointDto);
  }

  async createPoints(inputPoints: CreatePointDto[]): Promise<Point[]> {
    const points: Point[] = [];
    for await (const point of inputPoints) {
      points.push(await this.create(point));
    }

    return points;
  }
}
