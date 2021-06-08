import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService} from './user/user.service'


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
    ) {}

  @Get(':code')
  getHello(@Param('code') code: string) {
    this.appService.loginProcess(code);
  }

  @Get('/test')
  getHello2(): string {
    return this.appService.getHello();
  }
}
