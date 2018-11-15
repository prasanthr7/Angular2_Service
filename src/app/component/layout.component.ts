import { Component } from "@angular/core";
import { AppDataService } from "../Services/app-data.service";

@Component({
selector:'layout',
templateUrl:'./layout.component.html'
})
export class LayoutComponent{

    title="Application Layout";
    
    constructor(private appDataService:AppDataService){
     
    }
}