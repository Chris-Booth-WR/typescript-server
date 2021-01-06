import { Error } from "../common/common.error";

export class Users {
    private users: User[];
    constructor() {
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
    public list(order: string = ""): User[] {
        return this.users.sort((a, b) => order == "desc" ? b.Id - a.Id : a.Id - b.Id);
    }

    /**
     * item
     */
    public item(id: number): User {
        const user = this.users.find(item => item.Id == id);
        if (user)
            return user;

        throw new Error(`User not found ${id}`);
    }

    /**
     * update
     */
    public update(item: User): void {
        const user = this.users.find(user => user.Id == item.Id);
        if (user) {
            this.users[this.users.indexOf(user)] = item;
        }
    }

    /**
     * delete
     */
    public delete(item: User): void {
        let users: User[] = [];
        this.users.forEach(user => {
            if (user.Id != item.Id) {
                users.push(user);
            }
        });
        this.users = users;
    }

    /**
     * create
     */
    public create(item: User): void {
        this.users.push(item);
    }
}

export class User {
    Id: number;
    FirstName: string;
    LastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}