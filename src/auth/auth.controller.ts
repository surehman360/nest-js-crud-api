import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('signUp')
    signUp(){
        return this.authService.signUp();

    }

    @Post('signIn')
    signIn(){
        return this.authService.login();

    }
}
