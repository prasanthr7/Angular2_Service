import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:string;
  sub:Subscription;
  constructor(private service:SharedDataService) { }

  ngOnInit() {
    this.sub=this.service.getData().subscribe(str=>{
      this.data=str;
      console.log("data received from service-home :"+str);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    console.log("Destroyed");
  }
}
