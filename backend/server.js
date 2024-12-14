import express from 'express'
import dotenv from 'dotenv'
import router from './router/router.user';
import profuleRouter from './router/router.profile'
dotenv.config();
const app =express();
const port=process.env.PORT ||5000
app.use("/api",router);
app.use("/profile",profuleRouter);
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})