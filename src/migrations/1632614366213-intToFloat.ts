import {MigrationInterface, QueryRunner} from "typeorm";

export class intToFloat1632614366213 implements MigrationInterface {
    name = 'intToFloat1632614366213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."stations" ADD CONSTRAINT "UQ_f047974bd453c85b08bab349367" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."stations" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "public"."stations" ADD "latitude" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."stations" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "public"."stations" ADD "longitude" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."stations" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "public"."stations" ADD "longitude" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."stations" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "public"."stations" ADD "latitude" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."stations" DROP CONSTRAINT "UQ_f047974bd453c85b08bab349367"`);
    }

}
