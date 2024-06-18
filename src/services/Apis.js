import { commonFunction } from "./ApiCall";
import { baseUrl } from "./helper";


// register a new user
export const registerUser = async(data) =>{
    console.log(data)
    return await commonFunction("POST",`${baseUrl}/api/user/register`,data)
}


// register a new user
export const loginUser = async(data) =>{
    return await commonFunction("POST",`${baseUrl}/api/user/send-otp`,data)
}