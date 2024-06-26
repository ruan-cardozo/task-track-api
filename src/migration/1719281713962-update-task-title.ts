import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTaskTitle1719281713962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD COLUMN "title" VARCHAR NOT NULL;`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "title" VARCHAR NOT NULL;`);
    }

}
