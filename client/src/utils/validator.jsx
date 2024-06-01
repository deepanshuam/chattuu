import {isValidUsername} from "6pp"


export const usernamesValidator =(username)=>{
    if(!isValidUsername(username))
    return  { isvalid: false, errorMessage: "username is invalid" };
}