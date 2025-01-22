
import { Request, Response } from "express"
// import IUser from "../interfaces/IUser";



export const getAppointments = async (req: Request, res: Response) => {
    res.status(200).json({message: "Obtener el listado de todos los turnos de todos los usuarios."})
}

export const  getAppointmentsDetails = async (req: Request, res: Response ) => {
    res.status(200).json({message: "Obtener el detalle de un turno específico."})
}

export const askAppointments = async (req: Request, res: Response ) => {
    res.status(200).json({message: "Agendar un nuevo turno."})
}

export const CancelledAppointments = async (req: Request, res: Response ) => {
    res.status(200).json({message: "Obtener el detalle de un turno específico."})
}
