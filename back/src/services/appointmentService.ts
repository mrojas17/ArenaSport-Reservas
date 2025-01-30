import { AppointmentStatus, Appointment } from "../entities/Appointment";
import {AppointmentDto} from "../dto/AppointmentDto";
import { AppDataSource } from "../config/data-source";
import AppointmentRepository from "../repositories/AppointmentRepository";
import UserRepository from "../repositories/UserRepository";
import { sendConfirmationEmail } from "./emailService";


export const scheduleAppointmentsService = async (appointmentData: AppointmentDto): Promise<Appointment | void> => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
        queryRunner.startTransaction();

        const newAppointment = AppointmentRepository.create({
            asunto: appointmentData.asunto,
            date: appointmentData.date,
            time: appointmentData.time,
            status: appointmentData.status as AppointmentStatus,
            userId: appointmentData.userId,
        });

        await queryRunner.manager.save(newAppointment);
        const user = await UserRepository.findById(appointmentData.userId);

        if (!user) throw new Error("Usuario no encontrado");

        newAppointment.user = user;
        await queryRunner.manager.save(newAppointment);

        await queryRunner.commitTransaction();

        // 🔹 Enviar email de confirmación
        await sendConfirmationEmail(user.email, newAppointment);

        return newAppointment;
    } catch (error: any) {
        await queryRunner.rollbackTransaction();
        throw new Error("Error creando el turno: " + error.message);
    } finally {
        await queryRunner.release();
    }
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