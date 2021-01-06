import { User } from "../models/users.user";
export interface IUserRepo {
    list(order: string): User[];
    item(id: number): User;
    update(item: User): void;
    delete(item: User): void;
    create(item: User): void;
}