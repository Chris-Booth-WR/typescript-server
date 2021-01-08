import express from "express";
import * as jwt from 'jsonwebtoken';
import { SignOptions } from "jsonwebtoken";
import { LocalUsers } from "../repository/users/LocalUsers";
import { CommonRoutesConfig } from "./CommonRoutesConfig";
import * as settings from "../appsettings.json";

export class AuthenticationRoutes extends CommonRoutesConfig {
    users!: LocalUsers;
    constructor(app: express.Application) {
        super(app, 'MarketingRoutes', (self: CommonRoutesConfig) => {
            (self as AuthenticationRoutes).users = new LocalUsers();
        });
    }

    configureRoutes() {
        this.app.route(`/auth/token`)
            .post((req: express.Request, res: express.Response): void => {
                // Read username and password from request body
                const { username, password } = req.body;

                // Filter user from the users array by username and password
                const user = this.users.list().find(u => { return u.username === username && u.password === password });

                if (user) {
                    // Generate an access token
                    const signOptions = this.buildSettings(settings.jwtOptions);
                    const accessToken = jwt.sign({ username: user.username, role: user.role }, settings.accessTokenSecret, signOptions);

                    res.json({ accessToken });
                } else {
                    res.status(403).send('Username or password incorrect');
                }
            })
        return this.app;
    }

    buildSettings(jwtOptions: {
        expiresIn: string;
        algorithm: string;
        audience: string;
        encoding: string;
        issuer: string;
        mutatePayload: boolean;
        noTimestamp: boolean;
        subject: string;
        header: object;
        jwtid: string;
        keyid: string;
        notBefore: string;
    }): jwt.SignOptions {
        return {
            expiresIn: jwtOptions.expiresIn,
            algorithm: <jwt.Algorithm>jwtOptions.algorithm ?? "HS256",
            audience: jwtOptions.audience,
            encoding: jwtOptions.encoding,
            issuer: jwtOptions.issuer,
            mutatePayload: jwtOptions.mutatePayload,
            noTimestamp: jwtOptions.noTimestamp,
            subject: jwtOptions.subject,
            header: jwtOptions.header,
            jwtid: jwtOptions.jwtid,
            keyid: jwtOptions.keyid,
            notBefore: jwtOptions.notBefore
        }
    }
}