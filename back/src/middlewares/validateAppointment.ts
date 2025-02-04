import { Request, Response, NextFunction } from "express";
import { AppointmentDto } from "../dto/AppointmentDto";

const validateAppointment = (req: Request, res: Response, next: NextFunction): void => {
    
    const requiredFields: (keyof AppointmentDto)[] = ["asunto","date", "time", "status"];

    const missingFields = requiredFields.filter(field => !req.body[field]);

    
    if (missingFields.length > 0) {
        res.status(400).json({
            message: `Falta información para crear el appointment: ${missingFields.join(", ")}`
        });
        return;
    }

    next();
};

export default validateAppointment;
