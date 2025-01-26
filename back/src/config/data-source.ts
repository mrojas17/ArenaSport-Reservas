import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "secret",
    database: "demo_typeorm",
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: []
})

export const Usermodel = AppDataSource.getRepository(User);
export const Credentialmodel = AppDataSource.getRepository(Credential);
export const Appointmentmodel = AppDataSource.getRepository(Appointment);