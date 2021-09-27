import {MigrationInterface, QueryRunner} from "typeorm";

export class pointsAndProducts1632744615909 implements MigrationInterface {
    name = 'pointsAndProducts1632744615909'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" ADD "pricePrice" numeric`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "FK_e153884019bf031279cfc4a75c4" FOREIGN KEY ("pricePrice") REFERENCES "prices"("price") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "FK_e153884019bf031279cfc4a75c4"`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP COLUMN "pricePrice"`);
    }

}
