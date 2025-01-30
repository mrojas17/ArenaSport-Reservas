
import { DeepPartial } from "typeorm";
import { AppDataSource} from "../config/data-source";
import { AppointmentStatus } from "../entities/Appointment";
import { Appointment } from "../entities/Appointment";
import UserRepository from "../repositories/UserRepository";
import CredentialRepository from "../repositories/CredentialRepository";
import AppointmentRepository from "../repositories/AppointmentRepository";

const userList = [ 
    {
        name: "Monica Rojas",
        email: "monicarojas1711@gmail.com",
        birthdate: "17/11/1998",
        nDni: 1121959,
        username: "monicar",
        password: "juanse"
    },{
        name: "Juan jose",
        email: "jscastrom1@gmail.com",
        birthdate: "17/11/2025",
        nDni: 137431959,
        username: "juanse",
        password: "hsdui6"
    },{
        name: "Juan Castro",
        email: "jscas1711@gmail.com",
        birthdate: "17/09/1994",
        nDni: 112272,
        username: "juasnd",
        password: "moni2323"
    },{
        name: "Emilia Castro",
        email: "emi1@gmail.com",
        birthdate: "12/11/2025",
        nDni: 17239,
        username: "emi12",
        password: "carerad"
    }
];

const preloadAppointments: DeepPartial<Appointment>[] = [
    {
        asunto: "Reservar cancha de futbol",
        date: "05/02/2025",
        time: "2 horas",  
        status: AppointmentStatus.ACTIVE,
        userId: 1
    },{
        asunto: "Reservar cancha de Tenis",
        date: "07/02/2025",
        time: "1 hora",  
        status: AppointmentStatus.ACTIVE,
        userId: 2
    },{
        asunto: "Reservar cancha de Voleibol",
        date: "10/02/2025",
        time: "3 horas",  
        status: AppointmentStatus.ACTIVE,
        userId: 3
    },{
        asunto: "Reservar cancha de padel",
        date: "25/02/2025",
        time: "3 horas",  
        status: AppointmentStatus.ACTIVE,
        userId: 4
    }
];

export const preloadUserData = async () => {

   await AppDataSource.manager.transaction(async (transactionalEntityManager)=> {
        
        const users = await UserRepository.find();

        if (users.length)   return  console.log("No se hizo la precarga de datos porque ya hay datos")
    

        for await (const user of userList) {
            const newCredential = CredentialRepository.create({
                username: user.username,
                password: user.password
            });

            const savedCredential = await transactionalEntityManager.save(newCredential);

            const newUser = UserRepository.create({
                name: user.name,
                email: user.email,
                birthdate: user.birthdate,
                nDni: user.nDni,
                credentialId: savedCredential.id
            });

            await transactionalEntityManager.save(newUser);
        }

        console.log("Precarga de datos de usuario realizado con exito");
    })
}

export const preloadAppointmentsData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    const promises =  preloadAppointments.map(async (appointment)=> {
        const newAppointment = await AppointmentRepository.create(appointment)
        await queryRunner.manager.save(newAppointment);
        const user = await UserRepository.findOneBy({id:appointment.userId});
        if(!user) throw Error ("Usuario inexistente")
        newAppointment.user = user;
        queryRunner.manager.save(newAppointment);
    })

    try {
        await Promise.all(promises);
        await queryRunner.startTransaction();
        console.log("Precarga de appointments realizada con éxito");
        await queryRunner.commitTransaction();  
    } catch  {
        console.log("Error al intertar un appointment");
        await queryRunner.rollbackTransaction();
    }finally{
        console.log("Ha finalizado el intento de carga");
        await queryRunner.release()
    }
    
}

