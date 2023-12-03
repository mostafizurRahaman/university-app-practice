import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
   port: process.env.PORT,
   node_env: process.env.NODE_ENV,
   database_uri: process.env.DATABASE_URI,
   bcrypt_solt_rounds: process.env.BCRYPT_SOLTS_ROUNDS,
};
