import {MigrationInterface, QueryRunner} from "typeorm";

export class floatPrices1632734359387 implements MigrationInterface {
    name = 'floatPrices1632734359387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP CONSTRAINT "PK_38d2b1f194d1008426617b337de"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD CONSTRAINT "PK_38d2b1f194d1008426617b337de" PRIMARY KEY ("price")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP CONSTRAINT "PK_38d2b1f194d1008426617b337de"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD "price" money NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD CONSTRAINT "PK_38d2b1f194d1008426617b337de" PRIMARY KEY ("price")`);
    }

}
