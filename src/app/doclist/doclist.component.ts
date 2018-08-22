import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SessionService} from '../session.service';

@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css'],
})
export class DoclistComponent implements OnInit {

    constructor(
        private docService: DocService,
        private route: ActivatedRoute,
        private sessionService: SessionService
    ) {
    }
  public user_id = 2;
  public user = JSON.parse(localStorage.getItem('session'));
  public username = this.user.user_name;
  public docs;

  ngOnInit() {
    console.log('doclist.component.ts');
      this.route.data
          .pipe(
              map((data) => data['docs'])
          )
          .subscribe(
              (docs) => {
                  this.docs = docs;
              });
  }
}
