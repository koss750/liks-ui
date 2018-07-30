import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css'],
})
export class DoclistComponent implements OnInit {
  public user_id = 2;
  public name = 'username';
  public docs;

    constructor(
        private docService: DocService,
        private route: ActivatedRoute
    ) {
    }

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
