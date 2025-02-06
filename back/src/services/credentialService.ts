import CredentialDto from "../dto/CredentialDto";
import CredentialRepository from "../repositories/CredentialRepository";


export const createCredentialUser = async (
    credentialData: CredentialDto
) => {

    const existingCredential = await CredentialRepository.findOne({ 
        where: { username: credentialData.username } 
    });
    
    if (existingCredential) {
    throw new Error("El nombre de usuario ya está en uso");
    }

    const credential = CredentialRepository.create({
        username: credentialData.username,
        password: credentialData.password,
    });

    return await CredentialRepository.save(credential);
    
};


export const validateUsername = async (
    username: string, password: string
): Promise<number> => {

    const user = await CredentialRepository.findOneBy({ username });

    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    if (user.password === password) {
        return user.id;
    } else {
        throw new Error("Contraseña incorrecta");
    }
}


