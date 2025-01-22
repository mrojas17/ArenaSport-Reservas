import {Router} from 'express';
import { getAppointments, getAppointmentsDetails, askAppointments, CancelledAppointments } from '../controllers/appointmentsController';
import auth from '../middlewares/auth';

// interface IRecurso {
//     id: string;
//     nombre: string;
// }

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/appointments", auth, getAppointments )
appointmentsRouter.get("/appointments", auth, getAppointmentsDetails)

appointmentsRouter.post("/appointments/schedule", askAppointments )
appointmentsRouter.put("/appointments/cancel", CancelledAppointments )

export default appointmentsRouter;