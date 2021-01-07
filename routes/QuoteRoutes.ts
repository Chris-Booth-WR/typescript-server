import express from "express";
import { authenticateJWT } from "../middleware/AuthenticaionMiddleware"
import { IMarketingRequest } from "../models/IMarketingRequest";
import { RepoBase } from "../repository/IRepository";
import { LocalMarketing } from "../repository/marketing/LocalMarketing";
import { CommonRoutesConfig } from "./CommonRoutesConfig";

export class QuoteRoutes extends CommonRoutesConfig {
    repo: RepoBase<IMarketingRequest, number>;
    constructor(app: express.Application) {
        super(app, 'MarketingRoutes');
        this.repo = new LocalMarketing();
    }

    configureRoutes() {
        this.app.route(`/quote`)
            .get([authenticateJWT, (req: express.Request, res: express.Response) => {
                res.status(200).json(this.repo.list(""));
            }])
        return this.app;
    }
}