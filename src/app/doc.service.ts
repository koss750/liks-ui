import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/docs.txt';
  getDocs() {
      return this.http.get(this.configUrl);
  }

}
