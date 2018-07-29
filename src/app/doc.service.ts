import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(
      private http: HttpClient,
      private session: SessionService
  ) { }
  configUrl = 'http://liks.test';
  fullUrl = this.configUrl;
  getDocs() {
    this.fullUrl = this.configUrl + '/documents';
    return this.http.get(this.fullUrl);
  }
    getMyDocs(id) {
        const options = this.session.getRequestOptions();
        return this.http
            .get(this.configUrl + '/mydocuments/' + id, options);
    }

}
