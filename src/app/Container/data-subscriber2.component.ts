import { Component, OnDestroy } from "../../../node_modules/@angular/core";
import { SubjectDataService } from "../subject-data.service";
import { Subscription } from "../../../node_modules/rxjs";

@Component({
    selector:"app-sub2",
    templateUrl:"./data-subscriber2.component.html"
})
export class DataSubscriber2Component implements OnDestroy{
   data:string;
   sub:Subscription;
   constructor(private subDataService:SubjectDataService){
       this.sub=this.subDataService.getSubject().subscribe(str=>{
           this.data=this.subDataService.getData();
           console.log("Sub2 called");
       });
   }
       
   updateData(){
    this.subDataService.setData("Sub2");
    this.subDataService.setSubject(true);
   }

   ngOnDestroy(){
    if(this.sub)
    this.sub.unsubscribe();
}
}