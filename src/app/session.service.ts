import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SessionService {

    public accessToken: string;
    public name: string;
    public user_id: number;
    public user_name: string;
    public cookie: any;

    constructor() {
        this.cookie = JSON.parse(localStorage.getItem('session'));
        if (this.cookie) {
            this.accessToken = this.cookie.accessToken;
            this.name = this.cookie.name;
            this.user_name = this.cookie.user_name;
            this.user_id = this.cookie.user_id;
        }
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
        this.user_id = null;
        this.user_name = null;
    }
}