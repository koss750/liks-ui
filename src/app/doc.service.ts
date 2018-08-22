import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Doc } from './doc';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DocService extends ApiService {

  getDocs(): Observable<Doc[]> {
    this.fullUrl = this.configUrl + '/documents/' + this.session.user_id;
    const options = this.getRequestOptions();
    return this.http
        .get(this.fullUrl,
            {headers: options}
            )
        .pipe(
            map(response => {
              const api_response = <any> response;
              const docs = api_response.results.data;
              console.log(docs);
              return docs.map((doc) => new Doc(doc));
            })
        );
  }
    getMyDocs(id) {
        const options = this.session.getRequestOptions();
        return this.http
            .get(this.configUrl + '/mydocuments/' + id, options);
    }

}
