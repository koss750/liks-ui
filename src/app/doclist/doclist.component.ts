import { Component, OnInit } from '@angular/core';
import {DocService} from '../doc.service';

@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css'],
})
export class DoclistComponent implements OnInit {
  public user_id = 2;
  public name = 'username';
  public docs;
  constructor(private _docservice: DocService) { }

  ngOnInit() {
    console.log('start');
    this._docservice.getMyDocs(this.user_id).subscribe((data) => this.docs = (data.results.data));
  }
}
