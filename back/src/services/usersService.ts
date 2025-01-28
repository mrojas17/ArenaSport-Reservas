import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import CredentialRepository from "../repositories/CredentialRepository";
import UserRepository from "../repositories/UserRepository";
import { createCredentialUser } from "./credentialService";


export const registerUsersService = async(userData: UserDto) => { 
    
    const credential = await createCredentialUser({
            username: userData.username, 
            password: userData.password,
        });

    const user = await UserRepository.create({
            name: userData.name,
            email: userData.email,
            birthdate: userData.birthdate,
            nDni: userData.nDni,
            credentialId: credential,
        })
    const results = await UserRepository.save(user)
    return results
    
}


export const getUsersService = async(): Promise<User[]> => {
    const users = await UserRepository.find();
    return users;

 }


export const getUserById = async(id: number): Promise <User | null>=> {
    const userId = await UserRepository.findOneBy({
        id
    })
    return userId

 }




