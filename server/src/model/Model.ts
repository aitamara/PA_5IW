import pg from "pg";
const { Client } = pg;

class Model {
  dbClient = (new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "root",
  })).connect();
}
export default Model;
