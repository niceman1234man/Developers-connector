import User from "../models/model.user";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const getUser=(req,res)=>{
    res.json({msg:"user"});
}

export const registerUser=(req,res)=>{
    try {
        const {name,email,password}=req.body;
    const user=User.findOne(email);
    if(user) return res.status(400).json("Email Already exist")
        const hashedPassword=bcrypt.hash(password,10);
        const newUser=new User({
         name,
         email,
         password:hashedPassword,

    });
    newUser.save();
    res.status(201).json({msg:"User registerd!!!"});
    } catch (error) {
       console.log(error) 
       res.status(500).json("Internal server Error!!");
    }
    

    
}

export const login =(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=User.findOne(email);
        if(!user) return res.status(404).json("user no found");
       const checkPassword= bcrypt.compare(password,user.password);
       if(!checkPassword) return res.status(400).json("Incorrect Password");
       const payload={
        id:user._id,
        name:user.name,
       }
       const token=jwt.sign(payload,process.env.SECRETE_KEY,{
        expiresIn:'3d'
        
       },(error,token)=>{
        res.json({
            sucess:true,token: 'Bearer '+token,
        })
       })
       res.cookie('token',token,{
        maxAge:3*24*60*60,
        httpOnly:true
    
       });
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal server Error!!" ); 
    }
   

}