import {MigrationInterface, QueryRunner} from "typeorm";

export class idk1632746258548 implements MigrationInterface {
    name = 'idk1632746258548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "FK_e153884019bf031279cfc4a75c4"`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP COLUMN "pricePrice"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD "product_id" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD "pricePrice" numeric`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "FK_e153884019bf031279cfc4a75c4" FOREIGN KEY ("pricePrice") REFERENCES "prices"("price") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
