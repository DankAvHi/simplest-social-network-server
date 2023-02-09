import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(login: string, password: string) {
    const user = await this.usersService.findOne(null, login);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }
}
