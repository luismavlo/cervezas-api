import { DataSource } from 'typeorm';

interface ConnectionOptions {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export class MysqlDatabase {

  private datasource: DataSource;

  constructor(options: ConnectionOptions) {
    this.datasource = new DataSource({
      type: 'mysql', //cuando hagan el pull cambiar a postgres
      host: options.host,
      port: options.port,
      username: options.username,
      password: options.password,
      database: options.database,
      //entities: [],
      synchronize: true,
    })
  }

  async connect () {
    await this.datasource.initialize()
      .then(() => console.log('Connected to database 🍕'))
      .catch(error => console.log('Error al conectarme a la base de datos', error));
  }

}

