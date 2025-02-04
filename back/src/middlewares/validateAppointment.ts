import { Request, Response, NextFunction } from "express";
import { AppointmentDto } from "../dto/AppointmentDto";

const validateAppointment = (req: Request, res: Response, next: NextFunction): void => {
    const requiredFields: (keyof AppointmentDto)[] = ["asunto", "date", "time"];
    

    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        res.status(400).json({
            message: `Falta información para crear el appointment: ${missingFields.join(", ")}`
        });
        return;  
    }

  
    const appointmentDate = new Date(req.body.date);
    const dayOfWeek = appointmentDate.getDay(); 
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        res.status(400).json({ message: 'No se pueden realizar reservas los fines de semana.' });
        return;  
    }

    const [hours, minutes] = req.body.time.split(':').map(Number);
    if (hours < 8 || hours >= 22) {
        res.status(400).json({ message: 'La hora de la reserva debe estar entre las 08:00 y las 22:00.' });
        return;  
    }

    next();
};

export default validateAppointment;


