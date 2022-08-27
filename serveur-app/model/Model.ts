import pg from "pg";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

class Model {
  dbClient = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });
  hashIt = (plain)=>{
    let password = crypto.createHash("sha256").update(plain).digest("hex");
    return password;
  }
  
}
export default Model;
