import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: process.env.DATABASE_PATH || "./data/notification.db",
    synchronize: true,
    logging: true,
    entities: ["./src/entity/*.ts"],
})

