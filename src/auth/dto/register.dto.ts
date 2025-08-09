import { IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    username: string;

    @MinLength(6)
    password: string;

}