import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programme } from './programme';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TravelService extends ApiService {

    getProgrammes(): Observable<Programme[]> {
    this.fullUrl = this.configUrl + '/programmes';
    const options = this.getRequestOptions();
    return this.http
        .get(this.fullUrl,
            {headers: options}
            )
        .pipe(
            map(response => {
              const api_response = <any> response;
              const programmes = api_response.results.data;
              return programmes.map((programme) => new Programme(programme));
            })
        );
  }

}
