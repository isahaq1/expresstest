import { Router } from "express";
import { registerUser,getUsers } from "../controllers/UserController.js";

const router = Router();
router.
route('/').post(registerUser).get(getUsers);
export default router;