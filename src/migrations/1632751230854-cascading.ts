import {MigrationInterface, QueryRunner} from "typeorm";

export class cascading1632751230854 implements MigrationInterface {
    name = 'cascading1632751230854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP CONSTRAINT "FK_65d8f29927038cddde63d5401b4"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD CONSTRAINT "FK_65d8f29927038cddde63d5401b4" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP CONSTRAINT "FK_65d8f29927038cddde63d5401b4"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD CONSTRAINT "FK_65d8f29927038cddde63d5401b4" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
