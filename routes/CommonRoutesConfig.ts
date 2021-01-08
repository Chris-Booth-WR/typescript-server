import express from 'express';
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string, callback: (self: CommonRoutesConfig) => void) {
        this.app = app;
        this.name = name;
        callback(this);
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
    abstract configureRoutes(): express.Application;
}