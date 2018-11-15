import { Component, AfterViewInit, OnDestroy } from "../../node_modules/@angular/core";
import { SharedDataService } from "./shared-data.service";
import { Subscription } from "../../node_modules/rxjs";

@Component({
    selector:'app-container',
    templateUrl:'./container.component.html'
})
export class ContainerComponent implements AfterViewInit,OnDestroy{
    data:string;
    text:string;
    subc:Subscription
    constructor(private sub:SharedDataService){}
    ngAfterViewInit(){
       this.subc= this.sub.getData().subscribe(data=>{
            this.data=data;
            console.log("After view init");
        });
    }
     ngOnDestroy(){
        this.subc.unsubscribe();
     }

     onTextChanged(str){
        this.text=str;
        console.log("Event triggered with "+str);
     }

     
}