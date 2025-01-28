
import { Request, Response } from "express"
import { getUsersService, getUserById, registerUsersService } from "../services/usersService";
import { validateUsername } from "../services/credentialService";
import { User } from "../entities/User";


export const getUsers = async (req: Request, res: Response):Promise<void> => {
    try {
        const users: User[] = await getUsersService();
        res.status(200).json(users);

    } catch (error: any) {
        res.status(404).json({
            error: "Este es un error en la peticion del usuario",
            details: error.message,
        });
    }
    
}

export const getUsersId  = async (req: Request, res: Response): Promise<void>=> {
    try {
        const userId= req.params.id;

        const user: User | null = await getUserById(Number(userId));

        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({
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
        res.status(404).json({
            error: "Usuario no se pudo registrar",
            details: error.message,
        });
    }
    
}

export const loginUsers = async (req: Request, res: Response )=> {
    try {
        const { username, password } = req.body;

        const userId = await validateUsername(username, password);
        const users = await getUserById(userId)
        res.status(200).json({
        message: "Login exitoso",
        userId, users
        });
    }
    catch (error: any) {
        res.status(404).json({
            error: "Uuariario no puede loguearse",
            details: error.message,
        });
    }
}