import CredentialDto from "./CredentialDto";

interface UserDto extends CredentialDto {
    name: string,
    email: string,
    birthdate: string,
    nDni: number
}

export default UserDto