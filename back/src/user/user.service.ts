import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
@Injectable()
export class UserService {
  constructor(private prisma:PrismaService){}
  async create(createUserDto: CreateUserDto) {
    try {
      const {name,surname,email,password} = createUserDto;
      const hashed = await bcrypt.hash(password,5);
      const user = await this.prisma.user.create({data:{name,surname,email,password:hashed}});
      if(!user){
        throw new BadRequestException('Не удалось зарегистрироваться');
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async login(loginUserDto:LoginUserDto){
    try {
      const {email,password} = loginUserDto;
      const finded = await this.prisma.user.findUnique({where:{email}});
      if(!finded){
        throw new BadRequestException('Пользователь не найден');
      }
      const findedByPass = await bcrypt.compare(password,finded.password);
      if(!findedByPass){
        throw new BadRequestException('Пользователь не найден');
      }
      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
