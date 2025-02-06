import { Request, Response, NextFunction } from "express"
import UserDto from "../dto/UserDto";
import UserRepository from "../repositories/UserRepository";

const validateUser = (req: Request, res: Response, next: NextFunction): void => {
    
    const requiredFields: (keyof UserDto)[] = ["name", "email", "birthdate", "nDni", "username", "password"];

    const missingFields = requiredFields.filter(field => !req.body[field]);

    
    if (missingFields.length > 0) {
        res.status(400).json({
            message: `Falta información para crear el usuario: ${missingFields.join(", ")}`
        });
        return;
    }

    next();
};
export default validateUser;

