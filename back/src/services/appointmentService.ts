import { AppointmentStatus, Appointment } from "../entities/Appointment";
import {AppointmentDto} from "../dto/AppointmentDto";
import { Appointmentmodel, Usermodel } from "../config/data-source";


export const createAppointmentsService = async (appointmentData: AppointmentDto): Promise<Appointment> => {
    
    
     const user = await Usermodel.findOneBy({
        id: appointmentData.userId
    });

    if (!user) {
        throw new Error("User not found");
    }

    const newAppointment = Appointmentmodel.create({
        date: appointmentData.date,
        time: appointmentData.time,
        status: appointmentData.status as AppointmentStatus, 
        userId: appointmentData.userId,
    });

    const results = await Appointmentmodel.save(newAppointment);
    return results;
}



export const getAppointmentsService = async():Promise<Appointment[]> => {
    const appointments = await Appointmentmodel.find();
    return appointments;

}


export const getAppointmentByIdService = async(id: number):Promise <Appointment | null> => {
    const appointmentId = await Appointmentmodel.findOneBy({
        id
    })
    return appointmentId
 }


 export const cancelAppointmentsService = async (id: number): Promise<Appointment> => {

    const appointment = await Appointmentmodel.findOneBy({ id });
    if (!appointment) {
        throw new Error('Appointment not found');
    }

    appointment.status = AppointmentStatus.CANCELLED;

    await Appointmentmodel.save(appointment);

    return appointment;
};