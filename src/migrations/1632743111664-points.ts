import {MigrationInterface, QueryRunner} from "typeorm";

export class points1632743111664 implements MigrationInterface {
    name = 'points1632743111664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "points" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "productProductId" character varying, CONSTRAINT "PK_57a558e5e1e17668324b165dadf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "points" ADD CONSTRAINT "FK_84bdb7875c1fac56dffb2a7ad9a" FOREIGN KEY ("productProductId") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "points" DROP CONSTRAINT "FK_84bdb7875c1fac56dffb2a7ad9a"`);
        await queryRunner.query(`DROP TABLE "points"`);
    }

}
