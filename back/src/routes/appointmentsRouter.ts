import {Router} from 'express';
import { getAppointments, askAppointments, CancelledAppointments, getAppointmentsById } from '../controllers/appointmentsController';

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointments )
appointmentsRouter.get("/:id", getAppointmentsById)

appointmentsRouter.post("/schedule", askAppointments )
appointmentsRouter.put("/cancel", CancelledAppointments )

export default appointmentsRouter;