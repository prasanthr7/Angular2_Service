import { Component, OnInit, OnChanges } from "@angular/core";
import { AppDataService } from "../Services/app-data.service";
import custom  from '../../assets/custom.js';

declare const custom:any;
@Component({
    selector: 'block1',
    templateUrl: './block1.component.html'
})
export class Block1Component implements OnInit, OnChanges {
    data: any;
    isLoaded = false;
    serviceError = false;
    message="Inline message";
    constructor(private appDataService: AppDataService) {
        this.message=custom.check();
        this.appDataService.getData(-11).subscribe(data => {
            this.data = data;
            this.isLoaded = true;
        },
            error => {
                this.serviceError = true;
                this.isLoaded = false;
            });
    }
    ngOnInit() {
        this.isLoaded = false;
    }
    ngOnChanges() {
        this.isLoaded = true;
    }
    ngOnDestroy() {
        this.isLoaded = false;
    }
}