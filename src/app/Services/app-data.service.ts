import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { SampleDataService } from "./sample-data.service";

@Injectable({ providedIn: 'root' })
export class AppDataService {

    dataSubject = new BehaviorSubject<any>(null);
    id: number;
    constructor(private sampleDataService: SampleDataService) {
        //presto value as id if any else null
        this.id=1;
       this.initDataService(1);
    }

    getData(id: number) {
        if (this.id !== id) {
            this.initDataService(id);
        }
        return this.dataSubject as Observable<any>;
    }
    private initDataService(id:number) {
        this.sampleDataService.getData(id).subscribe(data => {
            this.dataSubject.next(data);
        },
            error => {
                this.dataSubject.error(error);
            });
    }
}
