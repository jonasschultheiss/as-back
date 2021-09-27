import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePointDto } from './dto/create-point.dto';
import { Point } from './point.entity';

@EntityRepository(Point)
export class PointsRepository extends Repository<Point> {
  async createPoint(createPointDto: CreatePointDto): Promise<Point> {
    const { status } = createPointDto;

    const point = new Point();
    point.status = status;

    try {
      await point.save();
      return point;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
