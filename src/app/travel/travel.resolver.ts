import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Programme } from '../programme';
import { TravelService } from '../travel.service';

@Injectable()
export class TravelResolver implements Resolve<Observable<Programme[]>> {

    constructor(
        private travelService: TravelService
    ) {
    }

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Programme[]> {
        return this.travelService.getProgrammes();
    }
}
