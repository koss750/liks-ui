import { Component, OnInit } from '@angular/core';
import {DocService} from '../doc.service';

@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DoclistComponent implements OnInit {

  public name = 'username';
  public docs;
  constructor(private _docservice: DocService) { }

  ngOnInit() {
    this._docservice.getDocs().subscribe((data) => this.docs = data);
  }

}
