import express from "express";
import { authenticateJWT } from "../middleware/AuthenticaionMiddleware"
import { MarketingRequest } from "../models/MarketingRequest";
import { Repository } from "../repository/Repository";
import { LocalMarketing } from "../repository/marketing/LocalMarketing";
import { CommonRoutesConfig } from "./CommonRoutesConfig";

export class QuoteRoutes extends CommonRoutesConfig {
    repo!: Repository<MarketingRequest, number>;
    constructor(app: express.Application) {
        super(app, 'MarketingRoutes', (self: CommonRoutesConfig) => {
            (self as QuoteRoutes).repo = new LocalMarketing();
        });
    }

    configureRoutes() {
        this.app.route(`/quote`)
            .get([authenticateJWT, (req: express.Request, res: express.Response) => {
                res.status(200).json(this.repo.list(""));
            }])
        return this.app;
    }
}