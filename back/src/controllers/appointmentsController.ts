
import { Request, Response } from "express"
import { getAppointmentsService, getAppointmentByIdService, createAppointmentsService, cancelAppointmentsService } from "../services/appointmentService";
import { AppointmentDto } from "../dto/AppointmentDto";


export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await getAppointmentsService();

        res.status(200).json(appointments)
    } catch (error: any) {
        res.status(404).json({
            error: "Este es un error en la peticion del usuario",
            details: error.message,
        });
    }
}

export const  getAppointmentsById = async (req: Request, res: Response ) => {
    try {
            const appointmentId= req.params.id;
    
            const appointment = await getAppointmentByIdService(Number(appointmentId));
    
            res.status(200).json(appointment);
        } catch (error: any) {
            res.status(404).json({
                error: "Error al buscar ese id",
                details: error.message,
            });
        }
}

export const scheduleAppointments = async (req: Request, res: Response ) => {
   try {
           const appointment: AppointmentDto = req.body;
   
           const newAppointment = await createAppointmentsService(appointment);
   
           res.status(201).json({
               message: "Turno creado correctamento",
               data: newAppointment,
           });
       } catch (error: any) {
           res.status(404).json({
               error: "Turno no se pudo registrar",
               details: error.message,
           });
       }
}

export const CancelAppointments = async (req: Request, res: Response ) => {
    try {
        const { id } = req.params;

        const updatedAppointment = await cancelAppointmentsService(Number(id));

        res.status(201).json({
            message: "Turno cancelado",
            data: updatedAppointment,
        });
    } catch (error: any) {
        res.status(404).json({
            error: "Turno no se pudo cancelar",
            details: error.message,
        });
    }
}

