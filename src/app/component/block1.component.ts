import { Component } from "@angular/core";
import { AppDataService } from "../Services/app-data.service";

@Component({
    selector:'block1',
    templateUrl:'./block1.component.html'
})
export class Block1Component{
 data:any;
 serviceError=false;
        constructor(private appDataService:AppDataService){
            this.appDataService.getData(-11).subscribe(data=>{
                this.data=data;
            },
            error=>{
                this.serviceError=true;
            });
        }
}