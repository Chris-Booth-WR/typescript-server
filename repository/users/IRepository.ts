import { User } from "../../models/User";
export interface IUserRepo {
    list(order: string): User[];
    item(id: number): User;
    update(item: User): void;
    delete(item: User): void;
    create(item: User): void;
}