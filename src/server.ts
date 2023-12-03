import mongoose from "mongoose";
import configs from "./app/configs";
import app from "./app";

async function main() {
   try {
      await mongoose.connect(configs.database_uri as string);
      app.listen(configs.port, () => {
         console.log("server is running now!!");
      });
   } catch (err) {
      console.log(err);
   }
}

main();
