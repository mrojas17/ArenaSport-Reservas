import { Column,  Entity,  ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

export enum AppointmentStatus {
    ACTIVE = "Active",
    CANCELLED = "Cancelled"
}

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    asunto: string;
    
    @Column()
    date: string;

    @Column()
    time: string;

    @Column({
        type: "enum",
        enum: AppointmentStatus,
        default: AppointmentStatus.ACTIVE
    })
    status: AppointmentStatus;
    
    @ManyToOne(()=> User, (user)=> user.appointment)
    user: User;
    
}