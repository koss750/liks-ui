import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SessionService {

    public accessToken: string;
    public name: string;
    public user;

    constructor() {
    }

    public getRequestOptions() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + this.accessToken
        });
        return { headers };
    }

    public handleError(error: HttpErrorResponse | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }

    public destroy(): void {
        this.accessToken = null;
        this.name = null;
        this.user = null;
    }
}