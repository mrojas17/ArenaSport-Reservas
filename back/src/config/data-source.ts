import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";
import { DATABASE, HOST, PASSWORD, PORT, PORT_PG, USERNAME_PG } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: Number(PORT_PG),
    username: USERNAME_PG,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: []
})
