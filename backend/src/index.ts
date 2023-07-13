import express from 'express';
import cors from 'cors';
import index from './router';
import "reflect-metadata";
import { AppDataSource } from './data-source';
import dotenv from "dotenv";

const main = async () => {
  try {

    const result = dotenv.config();
    if (result.error) {
      throw result.error
    }

    await AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    //Variables
    const app = express()

    //middleware
    app.use(cors());
    app.use(express.json())

    //routes
    app.use(process.env.API_VERSION || "/api/v1", index);

    //Port
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
    
  }
  catch (error) {
      console.log(error);
  }
};

main();