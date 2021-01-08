import * as jwt from "jsonwebtoken";
import express from "express";
import { LocalUsers } from "../repository/users/LocalUsers";
import * as settings from "../appsettings.json";

const userRepo = new LocalUsers();
export function authenticateJWT(req: express.Request, res: express.Response, next:any) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, settings.accessTokenSecret, (err, user: any) => {
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