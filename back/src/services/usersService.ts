import IUser from "../interfaces/IUser";
import UserDto from "../dto/UserDto";
import { createCredentialUser } from "./credentialService";



//Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
let users: IUser[]= [];

let id: number = 1;

export const registerUsersService = async(userData: UserDto): Promise<IUser> => { 
    
    const credentialId = await createCredentialUser({
        username: userData.username, 
        password: userData.password,
    });

    const newUser:  IUser = {
        id,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        credencialId: credentialId,
    }

    users.push(newUser);
    id++;
    return newUser
    
}

// Implementar una función que pueda retornar el arreglo completo de usuarios.
export const getUsersService = async():Promise<IUser[]> => {
    return users;
 }

 
// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.

export const getUserById = async(id: number):Promise <IUser | null> => {
    const user = users.find((user) => user.id === id);
    return user || null;
 }




