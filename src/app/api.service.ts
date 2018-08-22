import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import { Doc } from './doc';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        protected http: HttpClient,
        protected session: SessionService,
    ) { }
    api_response;
    configUrl = 'http://liks.test';
    fullUrl = this.configUrl;

    public getRequestOptions() {
        const bearer = 'Bearer ' + this.session.accessToken;
        return ({ 'Authorization': bearer
        });
    }

}
