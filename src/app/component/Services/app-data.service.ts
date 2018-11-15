import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { SampleDataService } from "./sample-data.service";

@Injectable({providedIn: 'root'})
export class AppDataService{

   dataSubject=new Subject<any>();

   constructor(private sampleDataService:SampleDataService){
        this.sampleDataService.getData(0).subscribe(data=>{
            this.dataSubject.next(data);
        },
        error=>{
            this.dataSubject.error(error);
        });
   }

   getData(){
       return this.dataSubject as Observable<any>;
   }
   
}
