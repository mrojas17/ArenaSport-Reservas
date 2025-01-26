import UserDto from "../dto/UserDto";
import { Credentialmodel, Usermodel } from "../config/data-source";
import { User } from "../entities/User";


export const registerUsersService = async(userData: UserDto) => { 
    
    const credential = await Credentialmodel.create({
            username: userData.username, 
            password: userData.password,
        });

    await Credentialmodel.save(credential);

    const user = await Usermodel.create({
            name: userData.name,
            email: userData.email,
            birthdate: userData.birthdate,
            nDni: userData.nDni,
            credentialId: credential.id,
        })
    const results = await Usermodel.save(user)
    return results
    
}


export const getUsersService = async(): Promise<User[]> => {
    const users = await Usermodel.find();
    return users;

 }


export const getUserById = async(id: number): Promise <User | null>=> {
    const userId = await Usermodel.findOneBy({
        id
    })
    return userId

 }




