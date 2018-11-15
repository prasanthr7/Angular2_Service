import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class SampleDataService{
    url:string="http://localhost/MyApi/api/Sample/";

    constructor(private httpClient: HttpClient) { 
     }

     getData(id:number):Observable<any>{
         return this.httpClient.get(this.url+id);
     }
}