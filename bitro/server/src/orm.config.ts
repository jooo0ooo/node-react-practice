import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  username: 'joo',
  password: 'joohandsome!',
  port: 3306,
  host: 'bitro.crahgqer5bkd.ap-northeast-2.rds.amazonaws.com',
  database: 'bitro',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}']
};