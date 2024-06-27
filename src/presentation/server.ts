import express, { Router } from "express";

interface ServerOptions {
  port: number;
  routes: Router
}


export class Server {

  private readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(props: ServerOptions) {
    this.port = props.port;
    this.routes = props.routes;
  }

  async start(){

    this.app.use( express.json() );
    this.app.use( express.urlencoded({ extended: true }) );

    this.app.use(this.routes);

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    })
  }

}