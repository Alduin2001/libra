import { IsString, Matches } from "class-validator";

export class CreateUserDto {
    @IsString()
    name:string
    surname:string
    @Matches(/^\S+@\S+\.\S+$/,{message:"Некорректный ввод почты"})
    email:string
    @IsString()
    password:string
}
