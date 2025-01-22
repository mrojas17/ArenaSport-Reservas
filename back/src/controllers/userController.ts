
import { Request, Response } from "express"


export const getUsers = async (req: Request, res: Response) => {
    res.send({message: "Obtener todos los usuarios"})
}

export const getUsersId  = async (req: Request, res: Response) => {
    res.send({message: "Obtener usuario por ID"})
}

export const registerUsers = async (req: Request, res: Response ) => {
    res.send({message: "Registrar un usuario"})
}

export const loginUsers = async (req: Request, res: Response ) => {
    res.send({message: "Loguear al usuario"})
}