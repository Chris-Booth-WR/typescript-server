import * as jwt from "jsonwebtoken";
import express from "express";
import { LocalUsers } from "../repository/users/LocalUsers";

const userRepo = new LocalUsers();
export function authenticateJWT(req: express.Request, res: express.Response, next:any) {
    const authHeader = req.headers.authorization;
    const accessTokenSecret = 'youraccesstokensecret';
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user: any) => {
            if (err) {
                throw err;
            }

            req.body.user = userRepo.item(user.username);
            next();
        });
    } else {
        res.sendStatus(401);
    }
};