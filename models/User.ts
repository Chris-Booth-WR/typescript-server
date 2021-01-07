import { IUserModel } from "./IUserModel";


export class User implements IUserModel {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: string;

    constructor(id: number, firstName: string, lastName: string, username: string, password: string, role: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
