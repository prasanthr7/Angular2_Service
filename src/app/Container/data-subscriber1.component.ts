import { Component, OnDestroy } from "../../../node_modules/@angular/core";
import { SubjectDataService } from "../subject-data.service";
import { Subscription } from "../../../node_modules/rxjs";

@Component({
    selector:"app-sub1",
    templateUrl:"./data-subscriber1.component.html"
})
export class DataSubscriber1Component implements OnDestroy{
    data:string;
    sub:Subscription;
    constructor(private subDataService:SubjectDataService){
       this.sub= this.subDataService.getSubject().subscribe(str=>{
            this.data=subDataService.getData();
            console.log("Sub1 called");
        });
    }

    updateData(){
        this.subDataService.setData("Sub1");
        this.subDataService.setSubject(true);
    }
    ngOnDestroy(){
        if(this.sub)
        this.sub.unsubscribe();
    }
}