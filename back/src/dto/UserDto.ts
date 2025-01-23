import CredentialDto from "./CredentialDto";

interface UserDto extends CredentialDto {
    name: string,
    email: string,
    birthdate: string,
    credencialId: number
}

export default UserDto