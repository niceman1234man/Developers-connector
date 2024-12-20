import { TEST_DISPACH } from "./types.js";

export const registerUser=(userData)=>{
return {
        type:TEST_DISPACH,
        payload:userData
    }

}