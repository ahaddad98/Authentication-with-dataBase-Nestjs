import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './googleauth/google.strategy'
import { GoogleauthService } from './googleauth/googleauth.service';
import { intraauthService } from './intra_auth/intraauth.service';
import {Strategy} from 'passport-42'
import { IntraStrategy } from './intra_auth/intra.strategy';

@Module({
  imports: [GoogleauthService, intraauthService],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, GoogleauthService, IntraStrategy,intraauthService],
  // exports: [GoogleauthService],
})
export class AppModule {}
