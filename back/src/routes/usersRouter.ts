import {Router} from 'express';
import { registerUsers, getUsers, loginUsers, getUsersId } from '../controllers/userController';
import auth from '../middlewares/auth';



const userRouter: Router = Router();

userRouter.get("/", auth, getUsers )
userRouter.get("/:id", auth, getUsersId )

userRouter.post("/register", registerUsers )
userRouter.post("/login", loginUsers )

export default userRouter;