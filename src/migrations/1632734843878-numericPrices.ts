import {MigrationInterface, QueryRunner} from "typeorm";

export class numericPrices1632734843878 implements MigrationInterface {
    name = 'numericPrices1632734843878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP CONSTRAINT "PK_38d2b1f194d1008426617b337de"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD "price" numeric(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD CONSTRAINT "PK_38d2b1f194d1008426617b337de" PRIMARY KEY ("price")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP CONSTRAINT "PK_38d2b1f194d1008426617b337de"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD CONSTRAINT "PK_38d2b1f194d1008426617b337de" PRIMARY KEY ("price")`);
    }

}
