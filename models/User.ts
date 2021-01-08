import { UserModel } from "./UserModel";


export class User implements UserModel {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: string;

    constructor(firstName: string, lastName: string, username: string, password: string, role: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
