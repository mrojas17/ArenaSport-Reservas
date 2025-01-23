import IAppointments from "../interfaces/IAppointments";
//import AppointmentDto from "../dto/AppointmentDto";

let appointments: IAppointments[] = [];

//let id=1;

// Implementar una función que pueda retornar el arreglo completo de turnos.
export const getAppointmentsService = async():Promise<IAppointments[]> => {
    return appointments;
 }

// Implementar una función que pueda obtener el detalle de un turno por ID.
export const getAppointmentByIdService = async(id: number):Promise <IAppointments | null> => {
    const appointment = appointments.find((appointment) => appointment.id === id);
    return appointment || null;
 }

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, 
// el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 


// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.