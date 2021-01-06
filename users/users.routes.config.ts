import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import { User, Users } from './users.local';

export class UsersRoutes extends CommonRoutesConfig {
    users: Users;
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
        this.users = new Users();
    }

    configureRoutes() {
        this.app.route(`/users`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).json(this.users.list(req.query["order"]?.toString() ?? "asc"));
            })
            .post((req: express.Request, res: express.Response) => {
                const user = new User(req.body["id"], req.body["firstName"], req.body["lastName"]);
                res.status(200).send(this.users.create(user));
            });

        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(this.users.item(Number.parseInt(req.params.userId)));
            })
            .put((req: express.Request, res: express.Response) => {
                const user = new User(req.body["id"], req.body["firstName"], req.body["lastName"]);
                res.status(200).send(this.users.update(user));
            })
            .delete((req: express.Request, res: express.Response) => {
                const user = new User(req.body["id"], req.body["firstName"], req.body["lastName"]);
                res.status(200).send(this.users.delete(user));
            });

        return this.app;
    }
}