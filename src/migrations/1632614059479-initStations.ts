import {MigrationInterface, QueryRunner} from "typeorm";

export class initStations1632614059479 implements MigrationInterface {
    name = 'initStations1632614059479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, CONSTRAINT "UQ_f047974bd453c85b08bab349367" UNIQUE ("id"), CONSTRAINT "PK_f047974bd453c85b08bab349367" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "stations"`);
    }

}
