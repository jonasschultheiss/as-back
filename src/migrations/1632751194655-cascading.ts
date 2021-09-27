import {MigrationInterface, QueryRunner} from "typeorm";

export class cascading1632751194655 implements MigrationInterface {
    name = 'cascading1632751194655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP CONSTRAINT "FK_65d8f29927038cddde63d5401b4"`);
        await queryRunner.query(`ALTER TABLE "public"."points" DROP CONSTRAINT "FK_84bdb7875c1fac56dffb2a7ad9a"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD CONSTRAINT "FK_65d8f29927038cddde63d5401b4" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."points" ADD CONSTRAINT "FK_84bdb7875c1fac56dffb2a7ad9a" FOREIGN KEY ("productProductId") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."points" DROP CONSTRAINT "FK_84bdb7875c1fac56dffb2a7ad9a"`);
        await queryRunner.query(`ALTER TABLE "public"."prices" DROP CONSTRAINT "FK_65d8f29927038cddde63d5401b4"`);
        await queryRunner.query(`ALTER TABLE "public"."points" ADD CONSTRAINT "FK_84bdb7875c1fac56dffb2a7ad9a" FOREIGN KEY ("productProductId") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."prices" ADD CONSTRAINT "FK_65d8f29927038cddde63d5401b4" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
