// En el servicio de credenciales:
// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

import ICredential from "../interfaces/ICredential";
import CredentialDto from "../dto/CredentialDto";

let credentialUsers: ICredential[] = [];

let id: number = 1;


export const createCredentialUser = async (credentialData: CredentialDto): Promise<number> => {

    const newCredentialUser: ICredential = {
        id,
        username: credentialData.username,
       password: credentialData.password,
    };

    credentialUsers.push(newCredentialUser);

    id++;

    return newCredentialUser.id;
    
};

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de
//  usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación 
// sea exitosa, deberá retornar el ID de las credenciales. 


export const validateUsername = async (username: string, password: string): Promise<number> => {

    const user = credentialUsers.find(user => user.username === username);

    if (!user) {
        throw new Error("Usuario no encontrado");
      }
    
    if (user.password === password) {
        return user.id; 
    } else {
        throw new Error("Contraseña incorrecta");
      }
}


