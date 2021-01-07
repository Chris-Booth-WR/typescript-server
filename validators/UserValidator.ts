import { IUserModel } from "../models/IUserModel";

export class UserValidator {
    GetMessage(user: IUserModel): object {
        let message: {
            message: string | undefined,
            fields: string[] | undefined
        } = {
            message: undefined,
            fields: undefined
        };

        if (!user) message.message = 'No user supplied';
        else {
            message.fields = [];
            if (!user.username || user.username.length === 0) message.fields.push('username');
            if (!user.firstName || user.firstName.length === 0) message.fields.push('firstName');
            if (!user.lastName || user.lastName.length === 0) message.fields.push('lastName');
            if (!user.role || user.role.length === 0) message.fields.push('role');
            if (!user.password || user.password.length === 0) message.fields.push('password');
            message.message = message.fields.length == 1 ? 'Missing fields' : 'Missing fields';
        }

        return { message };
    }
    public Validate(user: IUserModel): boolean {
        if (!user) return false;
        if (!user.username || user.username.length === 0) return false;
        if (!user.firstName || user.firstName.length === 0) return false;
        if (!user.lastName || user.lastName.length === 0) return false;
        if (!user.role || user.role.length === 0) return false;
        if (!user.password || user.password.length === 0) return false;

        return true;
    }
}