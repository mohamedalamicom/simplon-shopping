import { Injectable, ErrorHandler } from "@angular/core";

@Injectable()

export class InternalServerHandler implements ErrorHandler {
    handleError(error: any): void {
        console.log('Internal Server Handler', error);
    }
}