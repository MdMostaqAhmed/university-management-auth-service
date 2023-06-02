import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function main() {
  console.log(config.database_url);
   try{
    await mongoose.connect(config.database_url as string);
    
    

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })
    console.log(`Database connection successful`);
    
   } catch(err){
    console.log(err);
   }
  }

  main();