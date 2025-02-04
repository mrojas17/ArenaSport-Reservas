import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";


@Entity({
    name: "users"
})

export class User { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    birthdate: string;

    @Column({
        unique:true
    })
    nDni: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential;

    @OneToMany(()=> Appointment , ((appointment) => appointment.user))
    appointment: Appointment[]
}


