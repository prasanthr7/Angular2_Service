import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,OnDestroy {
  @Output() onTextChanged:EventEmitter<string>=new EventEmitter<string>(true);
  constructor(private service:SharedDataService) { }
  data:string;
  sub:Subscription;
  ngOnInit() {
    console.log("getting data from service on init");
    this.sub=this.service.getData().subscribe(str=>{
      this.data=str;
      console.log("data received from service-child :"+str);
    });
    console.log("Some other init code here");
  }

  change_click(){
    console.log("Data updating");
    this.service.setData("from child");
    this.onTextChanged.emit("From child event");
    console.log("Data updated");

  }
  text_Change(str){
    this.service.setData(str);
    this.onTextChanged.emit(str);
    console.log("Data updated from text");
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
    console.log("Destroyed");
  }
}
