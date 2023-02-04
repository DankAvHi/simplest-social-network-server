import { OmitType, PartialType } from "@nestjs/mapped-types";
import { User } from "../entities/user.entity";

export class UpdateUserInput extends PartialType(
  OmitType(User, ["email", "password"])
) {
  id: number;
}
