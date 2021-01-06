import { Error } from "../../common/Error";
import { IUserModel } from "../../models/IUserModel";
import { User } from "../../models/User";
import { RepoBase } from "../IRepository";

export class LocalUsers extends RepoBase<IUserModel> {
    private users: IUserModel[];
    constructor() {
        super();
        this.users = [
            new User(1, "Chris", "Booth"),
            new User(2, "Dan", "Ransom"),
            new User(3, "Dom", "Sutherland"),
            new User(4, "Emma", "Oitaven")
        ];
    }

    /**
     * list
     */
    public list(order: string = ""): IUserModel[] {
        return this.users.sort((a, b) => order == "desc" ? b.id - a.id : a.id - b.id);
    }

    /**
     * item
     */
    public item(id: number): IUserModel {
        const user = this.users.find(item => item.id == id);
        if (user)
            return user;

        throw new Error(`User not found ${id}`);
    }

    /**
     * update
     */
    public update(item: IUserModel): void {
        const user = this.users.find(user => user.id == item.id);
        if (user) {
            this.users[this.users.indexOf(user)] = item;
        }
    }

    /**
     * delete
     */
    public delete(item: IUserModel): void {
        let users: IUserModel[] = [];
        this.users.forEach(user => {
            if (user.id != item.id) {
                users.push(user);
            }
        });
        this.users = users;
    }

    /**
     * create
     */
    public create(item: IUserModel): void {
        this.users.push(item);
    }
}
