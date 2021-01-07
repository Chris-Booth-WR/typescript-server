import { CommonRoutesConfig } from './CommonRoutesConfig';
import express from 'express';
import { LocalUsers } from '../repository/users/LocalUsers';
import { IUserModel } from '../models/IUserModel';
import { RepoBase } from '../repository/IRepository';
import { UserValidator} from '../validators/UserValidator';

export class UsersRoutes extends CommonRoutesConfig {
    repo: RepoBase<IUserModel, string>;
    validator: UserValidator;
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
        this.repo = new LocalUsers();
        this.validator = new UserValidator();
    }

    configureRoutes() {
        this.app.route(`/users`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).json(this.repo.list(req.query["order"]?.toString() ?? "asc"));
            })
            .post((req: express.Request, res: express.Response) => {
                const user: IUserModel = req.body;
                if(!this.validator.Validate(user)){
                    return res.status(400).send(this.validator.GetMessage(user));
                }
                res.status(200).send(this.repo.create(user));
            });

        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(this.repo.item(req.params.username));
            })
            .put((req: express.Request, res: express.Response) => {
                const user: IUserModel = req.body;
                if(!this.validator.Validate(user)){
                    return res.status(400).send(this.validator.GetMessage(user));
                }
                res.status(200).send(this.repo.update(user));
            })
            .delete((req: express.Request, res: express.Response) => {
                const user: IUserModel = req.body;
                if(!this.validator.Validate(user)){
                    return res.status(400).send(this.validator.GetMessage(user));
                }
                res.status(200).send(this.repo.delete(user));
            });

        return this.app;
    }
}