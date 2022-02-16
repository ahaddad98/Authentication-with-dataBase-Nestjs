import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleauthService } from './googleauth/googleauth.service';
import { AuthGuard } from '@nestjs/passport';
import { intraauthService } from './intra_auth/intraauth.service';
import { reduce } from 'rxjs';
// import  from 'passport';
// import {Strategy} from 'passport-42'

@Controller()
export class AppController {
  constructor(private readonly googleauthService: GoogleauthService) {}

  @Get()
  @UseGuards(AuthGuard('42'))
  async IntraAuth(@Req() req) {
    return 'amine samir';
  }

  @Get('/42/redirect')
  @UseGuards(AuthGuard('42'))
  intraAuthRedirect(@Req() req) {
    return req.user;
  }

  // @Get()
  // @UseGuards(AuthGuard('google'))
  // async googleAuth(@Req() req) {}

  // @Get('redirect')
  // @UseGuards(AuthGuard('google'))
  // googleAuthRedirect(@Req() req) {
  //   return this.googleauthService.googleLogin(req)
  // }
}
