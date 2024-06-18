import { commonFunction } from "./ApiCall";
import { baseUrl } from "./helper";


// register a new user
export const registerUser = async(data) =>{
    return await commonFunction("POST",`${baseUrl}/api/user/register`,data)
}