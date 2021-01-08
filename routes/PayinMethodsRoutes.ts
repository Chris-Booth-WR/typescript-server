import express from "express";
import { CommonRoutesConfig } from "./CommonRoutesConfig";
import {authenticateJWT} from "../middleware/AuthenticaionMiddleware"

export class PayinMethodsRoutes extends CommonRoutesConfig {    
    constructor(app: express.Application) {
        super(app, 'MarketingRoutes', () => {});
    }

    configureRoutes() {
        this.app.route(`/payinMethods`)
            .get([authenticateJWT, (req: express.Request, res: express.Response) => {
                res.status(200).json([{
                    method: "Bank Transfer"
                },{
                    method: "Credit Card"
                }]);
            }])
        return this.app;
    }
}