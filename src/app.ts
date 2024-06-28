import "reflect-metadata"
import { Server } from './presentation/server';
import { AppRoutes } from './presentation/routes';
import { MysqlDatabase } from './data/mysql/mysql-database';
import { envs } from './data/config/envs';



async function main() {

  const mysqlDB = new MysqlDatabase({
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    username: envs.DB_USERNAME,
    password: envs.DB_PASSWORD,
    database: envs.DB_NAME,
  })

  await mysqlDB.connect();

  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes
  });

  await server.start();

  //otro codigo aqui
}

main();

