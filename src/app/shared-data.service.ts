import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject,ReplaySubject, Scheduler } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  sharedData:BehaviorSubject<string>=new BehaviorSubject('');

  setData(str:string){
    this.sharedData.next(str);
    
  }

  getData(){
    return this.sharedData.asObservable();
  }
}
