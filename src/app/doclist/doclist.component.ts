import { Component, OnInit } from '@angular/core';
import {DocserviceService} from '../docservice.service';

@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DoclistComponent implements OnInit {

  public name = 'username';
  public docs = [];
  constructor(private _docservice: DocserviceService) { }

  ngOnInit() {
    this.docs = this._docservice.getDocs();
  }

}
