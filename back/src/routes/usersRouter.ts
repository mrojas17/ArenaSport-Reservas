import {Router} from 'express';
import { registerUsers, getUsers, loginUsers, getUsersId } from '../controllers/userController';
//import auth from '../middlewares/auth';

// interface IRecurso {
//     id: string;
//     nombre: string;
// }

const userRouter: Router = Router();

userRouter.get("/", getUsers )
userRouter.get("/:id", getUsersId )

userRouter.post("/register", registerUsers )
userRouter.post("/login", loginUsers )

export default userRouter;