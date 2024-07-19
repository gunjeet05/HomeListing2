//name to test .

import express from "express";
import { user, addUser } from "../Controller/User.controller.js";
const Router=express.Router();

Router.get("/test", user);
Router.post("/addUser", (req, res)=>{
    
    const user=req.body.user;
    addUser(user);
    res.json({
        "message":"Ho gya bhai"
    })
})


export default Router;


