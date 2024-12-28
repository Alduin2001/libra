import { IsString } from "class-validator";

export class LoginUserDto{
    @IsString()
    email:string
    password:string
}