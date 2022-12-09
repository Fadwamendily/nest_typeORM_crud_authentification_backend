import { Controller,Body, Delete, Get, Param, Patch, Post, Req, ParseIntPipe } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    getUsers() {
        return this.userService.get()
        //return {name:"fadwa", email:"mendilyfadwa015@gmail.com"}
    }
    @Post()
    store(@Body() createUserDTO: CreateUserDto ) {
        return this.userService.create(createUserDTO)
    }
    @Patch('/:userId')
    update(@Body()updateUserDTO:UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number) {
        return this.userService.update(updateUserDTO, userId)
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number ) {
        return this.userService.show(userId)
    }

    @Delete('/:userId')
    deletegetUser(@Param('userId', ParseIntPipe) userId: number ) {
        return this.userService.deleteUser(userId)
    }

}
