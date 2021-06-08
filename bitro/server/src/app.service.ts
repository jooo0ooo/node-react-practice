import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  loginProcess(code: string) {
    this.httpService.post('kauth.kakao.com/oauth/token',
      {
        "grant_type": "authorization_code",
        "client_id": "198cec56f952036db2299bf099f94724",
        "redirect_uri": "http://localhost:5000",
        "code": code
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }).pipe(
        map((res) => {
        console.log(res);
      }));
  }
  
  getHello(): string {
    return 'Hello World!';
  }
}
