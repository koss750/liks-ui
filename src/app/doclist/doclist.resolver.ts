import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Doc } from '../doc';
import { DocService } from '../doc.service';

@Injectable()
export class DoclistResolver implements Resolve<Observable<Doc[]>> {

    constructor(
        private docService: DocService
    ) {
    }

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Doc[]> {
        return this.docService.getDocs();
    }
}
