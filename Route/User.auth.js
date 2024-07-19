import  express  from "express";
import signup from "../Controller/Auth.controller.js"
import User from "../Model/User.js";
const Router=express.Router();

Router.post('/signUp', signup);
export default Router;
