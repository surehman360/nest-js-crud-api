import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    login(){
        return { message: "I have signed In"}

    }
    signUp(){
        return {message: "I have signed Up"}

    }
}