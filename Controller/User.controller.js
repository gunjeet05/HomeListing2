import User from "../Model/User.js"

export const user=(req, res)=>{
    res.json({
        message:"Kya haal hai"
    })
}


export const addUser=(user)=>{
    const newUser=new User({
        username:user.username, 
        password:user.password, 
        email:user.email
    })
    newUser.save();

}