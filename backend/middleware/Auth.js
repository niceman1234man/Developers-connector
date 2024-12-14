import jwt from 'jsonwebtoken'
import User from '../models/model.user';
export const verify=(req,res,next)=>{
    try {
      const token=req.cookies.token;
      if(!token) return res.json("UnAuthorized token")  
        const decode=jwt.verify(token,process.env.SECRETE_KEY);
      if(!decode) return res.json("UnAuthorized Invalid token") ;
  const user=User.findById(decoded.id);
  if(!user) return res.json("UnAuthorized Invalid token user not found") ;
    res.user=user;
    next();
    } catch (error) {
     res.status(500).json("internal server error")   ;
     console.log(error);
    }
}