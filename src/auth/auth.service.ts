import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string): Promise<any> {
    const user = {
      id: 1,
      username: 'test',
      password: 'password',
    };

    if (user.username === username && user.password === password) {
      return user;
    }

    return null; // not a valid username or password
  }
}
