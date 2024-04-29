import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'João Paulo',
    description: `O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir informações da pessoa conectada.`,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'email@email.com',
    description: `O e-mail é necessário para o login`,
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '123@abc',
    description: `Para login usando o e-mail diretamente é necessário informar uma senha.`,
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;
}
