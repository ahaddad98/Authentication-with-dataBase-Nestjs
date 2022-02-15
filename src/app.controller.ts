import { Controller, Request, Post, Get,UseGuards , Body} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { userDto } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  // constructor(private authService: AuthService) {}
  constructor(private readonly usersServices: UsersService, private authService: AuthService) {}

  @Post()
  Consolebody(@Body() user: userDto): any {
    return this.usersServices.insert(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    const {username, password} = req.body;
    const user = new UsersService;
    const result = await user.findOne(username)
    return this.authService.login(req.user);
  }
  
}