import {Router} from 'express';
import { registerUsers, getUsers, loginUsers, getUsersId } from '../controllers/userController';
import auth from '../middlewares/auth';
import validateUser from '../middlewares/validateUser';



const userRouter: Router = Router();

userRouter.get("/", auth, getUsers )
userRouter.get("/:id", getUsersId )

userRouter.post("/register", validateUser,  registerUsers )
userRouter.post("/login", loginUsers )

export default userRouter;