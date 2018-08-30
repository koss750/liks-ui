import { Component, OnInit } from '@angular/core';
import {TravelService} from '../travel.service';
import {ActivatedRoute} from '@angular/router';
import {SessionService} from '../session.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

    constructor(
        private travelService: TravelService,
        private route: ActivatedRoute
    ) {
    }
    public programmes;

  ngOnInit() {
      this.route.data
          .pipe(map((data) => data['programmes']))
          .subscribe(
              (programmes) => {
                  this.programmes = programmes;
                  console.log(this.programmes);
              });
  }

}
