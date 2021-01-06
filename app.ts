import express from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors'
import { CommonRoutesConfig } from './common/common.routes.config';
import { UsersRoutes } from './users/users.routes.config';
import debug from 'debug';
import { Error } from './common/common.error';
import e from 'express';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

routes.push(new UsersRoutes(app));

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));


app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at http://localhost:${port}`)
});
server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});

function isEmpty(obj: any) {
    if (obj == null)
        return true;
    if (obj === undefined)
        return true;

    if (obj.length === 0)
        return true;

    if (obj.length > 0)
        return false;

    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }

    return true;
}

function removeEmptyProperties(params: any): any {
    let returnObject: any = {};
    Object.keys(params).forEach(index => {
        if (!isEmpty(params[index])) {
            returnObject[index] = params[index];
        }
    });
    return returnObject;
}

app.use(function (err: any,
    req: express.Request,
    res: express.Response,
    next: (arg0: any) => any) {
    if (res.headersSent) {
        return next(err)
    }
    err.request = req.body;
    res.status(500).json(removeEmptyProperties(err));
});