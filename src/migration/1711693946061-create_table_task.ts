import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTask1711693946061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "task" (
                "id" SERIAL PRIMARY KEY,
                "description" character varying NOT NULL,
                "completed" boolean NOT NULL,
                "status" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now()
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "task";
        `);
  }
}
