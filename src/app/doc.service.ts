import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Doc } from './doc';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(
      private http: HttpClient,
      private session: SessionService,
  ) { }
  docs: Doc[] = [];
  api_response;
  configUrl = 'http://liks.test';
  fullUrl = this.configUrl;

    private getRequestOptions() {
        const bearer = 'Bearer ' + this.session.accessToken;
        return ({ 'Authorization': bearer
        });
    }

  getDocs(): Observable<Doc[]> {
    this.fullUrl = this.configUrl + '/documents';
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
