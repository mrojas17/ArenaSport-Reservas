import {Router} from 'express';
import { getAppointments, CancelAppointments, getAppointmentsById, scheduleAppointments } from '../controllers/appointmentsController';
import auth from '../middlewares/auth';

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", auth, getAppointments )
appointmentsRouter.get("/:id", auth, getAppointmentsById)

appointmentsRouter.post("/schedule", scheduleAppointments )
appointmentsRouter.put("/cancel", CancelAppointments )

export default appointmentsRouter;