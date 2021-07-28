import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';

@Controller('users')
export class ControllerController {
    constructor(
        private userService: UserService
    ) {}

    /*@Post('/')
    create(@Body() user: UserDto): UserDto {
        // return "This action adds a new user";
        return this.userService.create(user);
    }

    @Get('/')
    findAll(): UserDto[] {
        // return "This action returns all users";
        return this.userService.findAll();
    }*/

    @Post()
    create(@Body() user: UserDto): Promise<UserDto> {
        return this.userService.create(user);
    }

    @Get()
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }
}
