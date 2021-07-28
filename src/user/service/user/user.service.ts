import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    // public users: UserDto[] = [];

    // create(user: UserDto): UserDto {
    //     this.users.push(user);
    //     return user;
    // }

    // findAll(): UserDto[] {
    //     return this.users;
    // }

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    create(user: UserDto): Promise<UserDto> {
        return this.userRepository.save(user);
    }

    findAll(): Promise<UserDto[]> {
        return this.userRepository.find();
    }
    
}
