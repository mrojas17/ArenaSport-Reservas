import { AppointmentStatus } from "../entities/Appointment";

export interface AppointmentDto {
    date: string;
    time: string;
    status: AppointmentStatus;
    userId: number;
}