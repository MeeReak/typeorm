import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColoumTouser1724902073543 implements MigrationInterface {
    name = 'AddColoumTouser1724902073543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_638bac731294171648258260ff2" UNIQUE ("password")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_638bac731294171648258260ff2"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
