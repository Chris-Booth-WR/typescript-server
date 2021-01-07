import express from "express";
import * as jwt from 'jsonwebtoken';
import { SignOptions } from "jsonwebtoken";
import { LocalUsers } from "../repository/users/LocalUsers";
import { CommonRoutesConfig } from "./CommonRoutesConfig";

export class AuthRoutes extends CommonRoutesConfig {
    readonly accessTokenSecret: string;
    readonly users: LocalUsers;
    constructor(app: express.Application) {
        super(app, 'MarketingRoutes');
        this.accessTokenSecret = 'youraccesstokensecret';
        this.users = new LocalUsers();
    }

    configureRoutes() {
        this.app.route(`/auth/token`)
            .post((req: express.Request, res: express.Response) => {
                // Read username and password from request body
                const { username, password } = req.body;

                // Filter user from the users array by username and password
                const user = this.users.list().find(u => { return u.username === username && u.password === password });

                if (user) {
                    // Generate an access token
                    const signOptions: SignOptions = {
                        expiresIn: "100 years",
                        algorithm: "HS512",
                        audience: "marketing.worldremit.com",
                        encoding: "UTF-8",
                        issuer: "worldremit.com",
                        mutatePayload: true,
                        noTimestamp: true,
                        subject: "Marketing Api JWT",
                        header: {header: "Header"},
                        jwtid: "123456789",
                        keyid: "132456789",
                        notBefore: "99 years"
                    };
                    const accessToken = jwt.sign({ username: user.username, role: user.role }, this.accessTokenSecret, signOptions);

                    res.json({ accessToken });
                } else {
                    res.status(403).send('Username or password incorrect');
                }
            })
        return this.app;
    }
}