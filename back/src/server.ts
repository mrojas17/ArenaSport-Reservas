import express from "express";
import router from "./routes/recursos";

const server = express();


server.use(express.json());

server.use(router);


export default server;