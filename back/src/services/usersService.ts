import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import CredentialRepository from "../repositories/CredentialRepository";
import UserRepository from "../repositories/UserRepository";
import { createCredentialUser } from "./credentialService";
import AppointmentRepository from "../repositories/AppointmentRepository";
import { Appointment } from "../entities/Appointment";


export const registerUsersService = async(userData: UserDto) => { 
    
    const credential = await createCredentialUser({
            username: userData.username, 
            password: userData.password,
        });

    const user = await UserRepository.create({
            name: userData.name,
            email: userData.email,
            birthdate: userData.birthdate,
            nDni: userData.nDni,
            credential: credential,
        })
    const results = await UserRepository.save(user)
    return results
    
}


export const getUsersService = async(): Promise<User[]> => {
    const users = await UserRepository.find();
    return users;

 }


 export const getUserById = async (id: number): Promise<{ id: number, name: string, email: string, birthdate: string, nDni: number, 
    appointments: { id: number, asunto: string, date: string, time: string, status: string }[] } | null> => {
    const user = await UserRepository.findOneBy({ id });
    
    if (!user) {
        return null;
    }

    const appointments = await AppointmentRepository.find({
        where: { user: { id } }, 
        select: ["id", "asunto", "date", "time", "status"], 
    });

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni,
        appointments: appointments.map(appointment => ({
            id: appointment.id,
            asunto: appointment.asunto,
            date: appointment.date,
            time: appointment.time,
            status: appointment.status
        }))
    };
};





