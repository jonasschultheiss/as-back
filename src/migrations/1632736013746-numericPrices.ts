import {MigrationInterface, QueryRunner} from "typeorm";

export class numericPrices1632736013746 implements MigrationInterface {
    name = 'numericPrices1632736013746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" ALTER COLUMN "price" TYPE numeric`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" ALTER COLUMN "price" TYPE numeric(2,0)`);
    }

}
