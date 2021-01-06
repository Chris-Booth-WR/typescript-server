import express from "express";

export function HandelError(err: any,
        req: express.Request,
        res: express.Response,
        next: (arg0: any) => any) {
    if (res.headersSent) {
        return next(err)
    }
    err.request = req.body;
    res.status(500).json(removeEmptyProperties(err));
}

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