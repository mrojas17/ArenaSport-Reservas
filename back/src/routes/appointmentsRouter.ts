import {Router} from 'express';
import { getAppointments, CancelAppointments, getAppointmentsById, scheduleAppointments } from '../controllers/appointmentsController';
import auth from '../middlewares/auth';
import validateAppointment from '../middlewares/validateAppointment';

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointments )
appointmentsRouter.get("/:id",  getAppointmentsById)

appointmentsRouter.post("/schedule", validateAppointment, scheduleAppointments )
appointmentsRouter.put("/cancel/:id", CancelAppointments )

export default appointmentsRouter;