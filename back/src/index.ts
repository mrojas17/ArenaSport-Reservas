import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { preloadUserData, preloadAppointmentsData } from "./helpers/preloadData";

const startServer = async () => {
    
      await AppDataSource.initialize();
      console.log("Conexion a la base de datos realizada con éxito");
      await preloadUserData();
      await preloadAppointmentsData();

      server.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`);
      });
    
}

startServer();