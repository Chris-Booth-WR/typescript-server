export class Error {
    message: string;
    exception: any;
    request: any;
    constructor(message: string, exception: any = {}) {
        this.message = message;
        this.exception = exception;
    }
}