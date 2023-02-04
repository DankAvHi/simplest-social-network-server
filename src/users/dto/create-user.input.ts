import { OmitType } from "@nestjs/mapped-types";
import { User } from "../entities/user.entity";

export class CreateUserInput extends OmitType(User, ["id"]) {}
