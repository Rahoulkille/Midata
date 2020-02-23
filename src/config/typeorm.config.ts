import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mauricelecordier',
  password: '',
  database: 'boilerplate',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
}
