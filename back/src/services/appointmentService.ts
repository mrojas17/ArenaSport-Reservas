import { AppointmentStatus, Appointment } from "../entities/Appointment";
import {AppointmentDto} from "../dto/AppointmentDto";
import AppointmentRepository from "../repositories/AppointmentRepository";
import UserRepository from "../repositories/UserRepository";
import { sendConfirmationEmail } from "./emailService";

export const scheduleAppointmentsService = async (
    scheduleAppointmentDto: AppointmentDto
): Promise<Appointment | void > => {
    const {date, time, userId, asunto} = scheduleAppointmentDto;

    const findUser = await UserRepository.findOneBy({id: userId})
    if (!findUser) throw new Error("Usuario no encontrado");

    const newAppointment = AppointmentRepository.create({
        date, time, user: findUser, asunto, status: AppointmentStatus.ACTIVE
    })

    await AppointmentRepository.save(newAppointment)
     await sendConfirmationEmail(findUser.email, newAppointment);
    return newAppointment
}

export const getAppointmentsService = async():Promise<Appointment[]> => {
    const appointments = await AppointmentRepository.find();
    return appointments;

}


export const getAppointmentByIdService = async(id: number):Promise <Appointment | null> => {
    const appointmentId = await AppointmentRepository.findOneBy({
        id
    })
    return appointmentId
 }


 export const cancelAppointmentsService = async (id: number): Promise<Appointment> => {

    const appointment = await AppointmentRepository.findOneBy({ id });
    if (!appointment) {
        throw new Error('Appointment not found');
    }

    appointment.status = AppointmentStatus.CANCELLED;

    await AppointmentRepository.save(appointment);

    return appointment;
};