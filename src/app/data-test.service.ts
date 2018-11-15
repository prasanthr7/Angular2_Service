import { Injectable } from '@angular/core';
import { SessionDataService } from './session-data.service';

@Injectable({
  providedIn: 'root'
})
export class DataTestService {

  dataVar:any=null;
  cookie:any;
  constructor(private session:SessionDataService) { 
    console.log("Data Service Test Initialized")
    this.cookie=this.session.getCookie("c1");
    this.dataVar="Data";
  }
  getData(){
    return this.dataVar;
  }
}
