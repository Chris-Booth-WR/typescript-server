import { UserModel } from "../models/UserModel";
import express from "express"
import { Validator } from "./Validator";

export class UserValidator implements Validator {
    Validate(req: express.Request, res: express.Response, next: any) : express.Response | void {
        const user: UserModel = req.body;
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
        if (message.message) {
            return res.sendStatus(400).json(message);
        }
    }
}