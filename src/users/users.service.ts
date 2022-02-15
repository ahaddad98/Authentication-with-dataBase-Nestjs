import { Injectable } from '@nestjs/common';
import { userDto } from './dto/create-user.dto';
import { User_ent } from './entity/users.entity';

export type User = any;

@Injectable()
export class UsersService {
  async insert(userDetails: userDto): Promise<User> {
    const user = User_ent.create();
    // User_ent.fi
    const {username, password } = userDetails;
    // console.log(username);
    // const password  = userDetails.password;
    user.username = username;
    user.password = password;
    await User_ent.save(user);
    // console.log(user.);
    // this.users.push({id: 2, username: userDetails.username, password: userDetails.password});
    return user;
  }
    
      async findOne(user: string): Promise<User | undefined> {
        // console.log('===>'+user);
        return User_ent.findOne({username: user});
        // return this.users.find(user => user.username === username);
      }
}
