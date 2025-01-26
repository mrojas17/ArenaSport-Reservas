export enum AppointmentStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled"
}


interface IAppointments {
    id: number,
    date: string,
    time: string,  
    status: AppointmentStatus,
    userId: number
}

export default IAppointments;