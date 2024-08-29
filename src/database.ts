import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres", // Change to your database type (mysql, sqlite, etc.)
  host: "localhost",
  port: 5432,
  username: "myuser",
  password: "mypassword",
  database: "mydatabase",
  synchronize: false, // Set to false in production
  logging: false,
  entities: [__dirname + "/entity/**/*.ts"],
  migrations: [__dirname + "/migration/**/*.ts"],
  subscribers: [],
});
