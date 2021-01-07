import { Error } from "../../common/Error";
import { IUserModel } from "../../models/IUserModel";
import { User } from "../../models/User";
import { RepoBase } from "../IRepository";

export class LocalUsers extends RepoBase<IUserModel, string> {
    private users: IUserModel[];
    constructor() {
        super();
        this.users = [
            new User("Chris", "Booth", "cbooth", "cb00th", "Admin"),
            new User("Dan", "Ransom", "dransom", "drans0m", "Admin"),
            new User("Dom", "Sutherland", "dsutherland", "dsuth3rland", "Admin"),
            new User("Emma", "Oitaven", "eoitaven", "301taven", "Admin")
        ];
    }

    /**
     * list
     */
    public list(order: string = ""): IUserModel[] {
        return this.users.sort((a, b) => order == "desc" ? b.username.localeCompare(a.username) : a.username.localeCompare(b.username));
    }

    /**
     * item
     */
    public item(id: string): IUserModel {
        const user = this.users.find(item => item.username == id);
        if (user)
            return user;

        throw new Error(`User not found ${id}`);
    }

    /**
     * update
     */
    public update(item: IUserModel): void {
        const user = this.users.find(user => user.username == item.username);
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
            if (user.username != item.username) {
                users.push(user);
            }
        });
        this.users = users;
    }

    /**
     * create
     */
    public create(item: IUserModel): IUserModel {
        this.users.push(item);
        return item;
    }
}
