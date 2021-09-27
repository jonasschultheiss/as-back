import {MigrationInterface, QueryRunner} from "typeorm";

export class prices1632731858604 implements MigrationInterface {
    name = 'prices1632731858604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "prices" ("price" money NOT NULL, "currency" character varying NOT NULL, "stationId" integer, CONSTRAINT "PK_38d2b1f194d1008426617b337de" PRIMARY KEY ("price"))`);
        await queryRunner.query(`ALTER TABLE "prices" ADD CONSTRAINT "FK_65d8f29927038cddde63d5401b4" FOREIGN KEY ("stationId") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prices" DROP CONSTRAINT "FK_65d8f29927038cddde63d5401b4"`);
        await queryRunner.query(`DROP TABLE "prices"`);
    }

}
