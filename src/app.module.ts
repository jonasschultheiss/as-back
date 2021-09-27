import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { StationsModule } from './stations/stations.module';
import { AuthModule } from './auth/auth.module';
import { PricesModule } from './prices/prices.module';
import { ProductsModule } from './products/products.module';
import { PointsModule } from './points/points.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('databaseUrl'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        synchronize: false,
        migrationsRun: configService.get('NODE_ENV') === 'production',
        logging: true,
        logger: 'file',
        retryAttempts: 10,
        ssl: configService.get('NODE_ENV') === 'production' ? { rejectUnauthorized: false } : undefined,
      }),
      inject: [ConfigService],
    }),
    StationsModule,
    AuthModule,
    PricesModule,
    ProductsModule,
    PointsModule,
  ],
})
export class AppModule {}
