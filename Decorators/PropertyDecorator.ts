import { MinLength, IsString } from 'class-validator';

class User {
    @IsString()
    @MinLength(6)  
    username!: string;
}
