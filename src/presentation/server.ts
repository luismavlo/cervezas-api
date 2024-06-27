import express from "express";

interface ServerOptions {
  port: number;
}


export class Server {

  private readonly app = express();
  private readonly port: number;

  constructor(props: ServerOptions) {
    this.port = props.port;
  }

  async start(){

    this.app.use( express.json() );
    this.app.use( express.urlencoded({ extended: true }) );



    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    })
  }

}