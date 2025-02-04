
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

export const getUsersId = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = Number(req.params.id);

        if (isNaN(userId)) {
            res.status(400).json({ error: "El ID de usuario debe ser un número válido" });
            return;
        }

        const user = await getUserById(userId);

        if (!user) {
            res.status(404).json({ error: "Usuario no encontrado" });
            return;
        }

        res.status(200).json(user);
    } catch (error: any) {
        console.error("Error en getUsersId:", error);
        res.status(500).json({
            error: "Error interno del servidor",
            details: error.message,
        });
    }
};



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