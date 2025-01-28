export enum AppointmentStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled"
}


interface IAppointments {
    date: string,
    time: string,  
    status: AppointmentStatus,
    userId: number
}

export default IAppointments;