import { Injectable } from "../../node_modules/@angular/core";
import { Subject, Observable, BehaviorSubject } from "../../node_modules/rxjs";

@Injectable()
export class SubjectDataService{
    subjectFlag:Subject<boolean>=new Subject<boolean>();
    subjectData:string="Initial";
    setSubject(data:boolean){
        this.subjectFlag.next(data);
    }
    getSubject(){
        return this.subjectFlag.asObservable();
    }

    setData(data:string){
        this.subjectData=data;
    }
    getData(){
        return this.subjectData;
    }
}