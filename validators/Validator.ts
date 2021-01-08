import express from "express";

export interface Validator {
    Validate(req: express.Request, res: express.Response, next: any): express.Response | void;
}