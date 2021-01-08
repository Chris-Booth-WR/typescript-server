import { CommonRoutesConfig } from './CommonRoutesConfig';
import express from 'express';
import { LocalUsers } from '../repository/users/LocalUsers';
import { UserModel } from '../models/UserModel';
import { Repository } from '../repository/Repository';
import { Validator } from '../validators/Validator';
import { UserValidator } from '../validators/UserValidator';

export class UsersRoutes extends CommonRoutesConfig {
    repo!: Repository<UserModel, string>;
    validator!: Validator;
    constructor(app: express.Application) {
        super(app, 'UsersRoutes', (self: CommonRoutesConfig) => {
            (self as UsersRoutes).repo = new LocalUsers();
            (self as UsersRoutes).validator = new UserValidator();
        });
    }

    configureRoutes() {
        this.app.route(`/users`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).json(this.repo.list(req.query["order"]?.toString() ?? "asc"));
            })
            .post([this.validator.Validate, (req: express.Request, res: express.Response) => {
                const user: UserModel = req.body;
                res.status(200).send(this.repo.create(user));
            }]);

        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(this.repo.item(req.params.username));
            })
            .put([this.validator.Validate, (req: express.Request, res: express.Response) => {
                const user: UserModel = req.body;
                res.status(200).send(this.repo.update(user));
            }])
            .delete([this.validator.Validate, (req: express.Request, res: express.Response) => {
                const user: UserModel = req.body;
                res.status(200).send(this.repo.delete(user));
            }]);

        return this.app;
    }
}