
import { Request, Response } from "express"
import IAppointments from "../interfaces/IAppointments";
import { getAppointmentsService, getAppointmentByIdService } from "../services/appointmentService";


export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: IAppointments[] = await getAppointmentsService();

        res.status(200).json(appointments)
    } catch (error: any) {
        res.status(500).json({
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
            res.status(500).json({
                error: "Error al buscar ese id",
                details: error.message,
            });
        }
}

export const askAppointments = async (req: Request, res: Response ) => {
    res.send({message: "Agendar un nuevo turno."})
}

export const CancelledAppointments = async (req: Request, res: Response ) => {
    res.send({message: "Obtener el detalle de un turno específico."})
}
