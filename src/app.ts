import { Server } from './presentation/server';




async function main() {

  const server = new Server({
    port: 3000,
  });

  server.start();
}

