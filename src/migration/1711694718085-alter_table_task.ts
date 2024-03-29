import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterrTableTask1711694718085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // criar uma coluna de data
    await queryRunner.query(`
            ALTER TABLE "task"
            ADD COLUMN "due_date" TIMESTAMP;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // remover a coluna de data
    await queryRunner.query(`
            ALTER TABLE "task"
            DROP COLUMN "due_date";
        `);
  }
}
