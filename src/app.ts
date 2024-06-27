import { Server } from './presentation/server';
import { AppRoutes } from './presentation/routes';



async function main() {

  const server = new Server({
    port: 3100,
    routes: AppRoutes.routes
  });

  await server.start();

  //otro codigo aqui
}

main();

