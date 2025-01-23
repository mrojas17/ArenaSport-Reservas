
import { Request, Response } from "express"
import { getUsersService, getUserById, registerUsersService } from "../services/usersService";
import IUser from "../interfaces/IUser";
import { validateUsername } from "../services/credentialService";


export const getUsers = async (req: Request, res: Response):Promise<void> => {
    try {
        const users: IUser[] = await getUsersService();

        res.status(200).json(users)
    } catch (error: any) {
        res.status(500).json({
            error: "Este es un error en la peticion del usuario",
            details: error.message,
        });
    }
    
}

export const getUsersId  = async (req: Request, res: Response): Promise<void>=> {
    try {
        const userId= req.params.id;

        const user = await getUserById(Number(userId));

        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({
            error: "Error al buscar ese id",
            details: error.message,
        });
    }
    
}

export const registerUsers = async (req: Request, res: Response ) => {
    try {
        const user = req.body;

        const newUser = await registerUsersService(user);

        res.status(201).json({
            message: "Usuario creado correctamento",
            data: newUser,
        });
    } catch (error: any) {
        res.status(500).json({
            error: "Usuario no se pudo registrar",
            details: error.message,
        });
    }
    
}

export const loginUsers = async (req: Request, res: Response )=> {
    try {
        const { username, password } = req.body;

        const userId = await validateUsername(username, password);

        res.status(200).json({
        message: "Login exitoso",
        userId,
        });
    }
    catch (error: any) {
        res.status(500).json({
            error: "Uuariario no puede loguearse",
            details: error.message,
        });
    }
}