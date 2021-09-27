import {MigrationInterface, QueryRunner} from "typeorm";

export class cascading1632750953532 implements MigrationInterface {
    name = 'cascading1632750953532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "FK_22c8e640d9c51a9e77e0733f134"`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "FK_22c8e640d9c51a9e77e0733f134" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "FK_22c8e640d9c51a9e77e0733f134"`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "FK_22c8e640d9c51a9e77e0733f134" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
