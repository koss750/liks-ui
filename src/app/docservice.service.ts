import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocserviceService {

  constructor() { }

  getDocs() {
      return [
          {'type': 'passport', 'number': '554776797'},
          {'type': 'passport', 'number': '525049274'}
      ];
  }

}
