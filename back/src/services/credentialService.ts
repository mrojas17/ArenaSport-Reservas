import CredentialDto from "../dto/CredentialDto";
import CredentialRepository from "../repositories/CredentialRepository";


export const createCredentialUser = async (
    credentialData: CredentialDto
): Promise<number> => {

        const newCredentialUser = CredentialRepository.create({
            username: credentialData.username,
            password: credentialData.password,
        });
    
        const savedCredential = await CredentialRepository.save(newCredentialUser);
    
        return savedCredential.id;
    
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


