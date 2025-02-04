
// import { AppDataSource} from "../config/data-source";
// import { AppointmentStatus } from "../entities/Appointment";
// import UserRepository from "../repositories/UserRepository";
// import CredentialRepository from "../repositories/CredentialRepository";
// import AppointmentRepository from "../repositories/AppointmentRepository";

// const userList = [ 
//     {
//         name: "Monica Rojas",
//         email: "monicarojas1711@gmail.com",
//         birthdate: "17/11/1998",
//         nDni: 1121959,
//         username: "onicar17",
//         password: "Juanse@1"
//     },{
//         name: "Juan Castro",
//         email: "jscastrom1@gmail.com",
//         birthdate: "17/11/2025",
//         nDni: 137431959,
//         username: "Juanse@1",
//         password: "Monicarojas@17"
//     },{
//         name: "Juan Esteban",
//         email: "js@gmail.com",
//         birthdate: "17/09/1994",
//         nDni: 112272,
//         username: "juasnd",
//         password: "Moni@323"
//     },{
//         name: "Emilia Castro",
//         email: "emi1@gmail.com",
//         birthdate: "12/11/2025",
//         nDni: 17239,
//         username: "emilia12",
//         password: "Monica@1"
//     }
// ];

// const preloadAppointments = [
//     {
//         asunto: "Reservar cancha de Voleibol",
//         date: "05/02/2025",
//         time: "2 horas",  
//         status: AppointmentStatus.ACTIVE,
//         userId: 1
//     },{
//         asunto: "Reservar cancha de Tenis",
//         date: "07/02/2025",
//         time: "1 hora",  
//         status: AppointmentStatus.ACTIVE,
//         userId: 2
//     },{
//         asunto: "Reservar cancha de Voleibol",
//         date: "10/02/2025",
//         time: "3 horas",  
//         status: AppointmentStatus.ACTIVE,
//         userId: 3
//     },{
//         asunto: "Reservar cancha de padel",
//         date: "25/02/2025",
//         time: "3 horas",  
//         status: AppointmentStatus.ACTIVE,
//         userId: 4
//     },{
//         asunto: "Reservar cancha de Futbol",
//         date: "25/01/2025",
//         time: "3 horas",  
//         status: AppointmentStatus.ACTIVE,
//         userId: 1
//     }
// ];

// export const preloadUserData = async () => {
//     await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
//         const users = await UserRepository.find();

//         if (users.length) {
//             console.log("No se hizo la precarga de datos porque ya hay datos");
//             return;
//         }

//         for (const user of userList) {
//             const newCredential = CredentialRepository.create({
//                 username: user.username,
//                 password: user.password
//             });

//             const savedCredential = await transactionalEntityManager.save(newCredential);

//             const newUser = UserRepository.create({
//                 name: user.name,
//                 email: user.email,
//                 birthdate: user.birthdate,
//                 nDni: user.nDni,
//                 credential: savedCredential // Asignar el objeto Credential directamente
//             });

//             await transactionalEntityManager.save(newUser);
//         }

//         console.log("Precarga de datos de usuario realizado con exito");
//     });
// };

// export const preloadAppointmentsData = async () => {
//     await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
//         for (const appointment of preloadAppointments) {
//             const user = await UserRepository.findOneBy({ id: appointment.userId });
//             if (!user) throw new Error(`Usuario con ID ${appointment.userId} no encontrado`);

//             const newAppointment = AppointmentRepository.create({
//                 asunto: appointment.asunto,
//                 date: appointment.date,
//                 time: appointment.time,
//                 status: appointment.status,
//                 user: user,
//             });

//             await transactionalEntityManager.save(newAppointment);
//         }

//         console.log("Precarga de datos de turnos realizada con éxito");
//     });
// };