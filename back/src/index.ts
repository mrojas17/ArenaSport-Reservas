import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

const startServer = async () => {
    try {
      await AppDataSource.initialize();
      console.log("Conexion a la base de datos realizada con éxito");
  
      server.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`);
      });
    } catch (error) {
      console.error("Error al conectar a la base de datos", error);
    }
  };
  
  startServer();