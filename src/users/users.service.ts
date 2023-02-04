import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const isUserExisted = this.checkIsCredentialsAlreadyUsed(
      createUserInput.login,
      createUserInput.email
    );

    if (isUserExisted)
      return new Error("User with this fields already existed");

    const password = await bcrypt.hash(createUserInput.password, 10);

    return await this.prisma.users.create({
      data: { ...createUserInput, password },
    });
  }

  async findAll() {
    return await this.prisma.users.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.users.findUnique({ where: { id } });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const isLoginUsed = this.checkIsCredentialsAlreadyUsed(
      updateUserInput.login
    );

    if (isLoginUsed) return Error("Login is already used");

    const { id: _, ...dataToUpdate } = updateUserInput;

    return await this.prisma.users.update({
      where: { id },
      data: { ...dataToUpdate },
    });
  }

  async remove(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }

  async checkIsCredentialsAlreadyUsed(
    login: string,
    email?: string
  ): Promise<boolean> {
    return (
      (
        await this.prisma.users.findMany({
          where: {
            OR: [{ email: email }, { login: login }],
          },
        })
      ).length > 0
    );
  }
}
