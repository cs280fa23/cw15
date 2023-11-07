import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('users')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  async createUser(
    @Body()
    user,
  ): Promise<any> {
    // const user = {
    //   username: 'username',
    //   password: 'password',
    // };

    return user;
  }
}
