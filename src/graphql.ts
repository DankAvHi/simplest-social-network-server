
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum role {
    admin = "admin",
    moderator = "moderator",
    user = "user"
}

export class CreateUserInput {
    email: string;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    patronymic?: Nullable<string>;
    login: string;
    gender?: Nullable<boolean>;
    password: string;
}

export class UpdateUserInput {
    id: number;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    patronymic?: Nullable<string>;
    login?: Nullable<string>;
    gender?: Nullable<boolean>;
}

export class User {
    __typename?: 'User';
    id: number;
    email: string;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    patronymic?: Nullable<string>;
    login: string;
    gender?: Nullable<boolean>;
    role?: Nullable<role>;
    password: string;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
