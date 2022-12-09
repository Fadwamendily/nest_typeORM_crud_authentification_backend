import { Injectable,Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './entity/user.entity';
@Injectable()
export class UserService {
    constructor (  
        @InjectRepository(User)
        private userRepository:Repository<User>)
        {}
    get():Promise<User[]> {
        return  this.userRepository.find()
    }
    create( createUserDTO:CreateUserDto) {
       return this.userRepository.save(createUserDTO)
    }
    update(updateUserDTO:UpdateUserDto, userId: number ) {
        return this.userRepository.update(userId,updateUserDTO)
    }
    show(userId: number) {
        return  this.userRepository.findOne({where: {id:userId} })
    }
    findByEmail(email: string) {
        return  this.userRepository.findOne({where: {email} })
    }

    deleteUser(userId: number) {
        return  this.userRepository.delete(userId)
    }
}
