import User from '../Model/User.js'

 const signup=async (req, res)=>{
    const {username, email, password} =req.body;
    const user=new User({
        username:username,
        email:email,
        password:password ,


    })
    try{
    await user.save();
    res.status(401);
    res.json("Data entered successfully");
    }
    catch(err){
        res.status(401);
       // res.json("Some error occured while entering data in database");
        res.json(err);
    }


}
export default signup;