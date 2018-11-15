import { Component } from '@angular/core';
import { SessionDataService } from './session-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-subject';
  data:string;
  constructor(private _sessionDataService:SessionDataService){
    _sessionDataService.clearSessionStorage();
    document.cookie="session=session1";
    this.data=_sessionDataService.getCookie("session");
    window.sessionStorage.setItem("session",this.data);
    window.sessionStorage.setItem("mydata","only session1");
    alert(this.data);
    
    alert(window.sessionStorage.getItem("mydata"));

  }

  
}
