import {Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']

})
export class ChildComponentComponent implements OnInit {

  @Input() parentData:string;

  @Output() childEvt = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {
  }

  onChange(data: string){
    this.childEvt.emit(data);
  }

}
