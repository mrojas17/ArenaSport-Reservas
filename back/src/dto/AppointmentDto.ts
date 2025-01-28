import { AppointmentStatus } from "../entities/Appointment";

export interface AppointmentDto {
    asunto: string;
    date: string;
    time: string;
    status: AppointmentStatus;
    userId: number;
}