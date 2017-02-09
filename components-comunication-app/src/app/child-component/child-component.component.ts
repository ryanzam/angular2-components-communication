import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  inputs:['parentData'],
  outputs: ['childEvt']

})
export class ChildComponentComponent implements OnInit {

  public parentData:string;

  childEvt = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {
  }

  onChange(data: string){
    this.childEvt.emit(data);
  }

}
