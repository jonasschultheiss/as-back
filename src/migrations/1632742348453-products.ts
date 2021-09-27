import {MigrationInterface, QueryRunner} from "typeorm";

export class products1632742348453 implements MigrationInterface {
    name = 'products1632742348453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("product_id" character varying NOT NULL, "stationId" integer, CONSTRAINT "PK_a8940a4bf3b90bd7ac15c8f4dd9" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_22c8e640d9c51a9e77e0733f134" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_22c8e640d9c51a9e77e0733f134"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
