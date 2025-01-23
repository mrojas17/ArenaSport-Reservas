import IUser from "./IUser"

interface IAppointments  extends IUser {
    id: number,
    date: string,
    hour: string,  
    status: string
    userId: number
}

export default IAppointments;