import "dotenv/config";


export const PORT = process.env.PORT || 3000;

export const HOST = process.env.HOST || "localhost"

export const PORT_PG=process.env.PORT_PG || 5432
export const USERNAME_PG= process.env.USERNAME_PG || "postgres"
export const PASSWORD= process.env.PASSWORD || "secret"
export const DATABASE= process.env.DATABASE || "demo_typeorm"
export const USERNAME_EMAIL= process.env.USERNAME_EMAIL
export const PASSWORD_EMAIL= process.env.PASSWORD_EMAIL
