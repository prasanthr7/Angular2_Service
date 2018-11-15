import { TestBed, async } from "@angular/core/testing";
import { AppDataService } from "../Services/app-data.service";
import { Observable } from 'rxjs'; 
import { of } from 'rxjs';
import { Block1Component } from "./block1.component";

class MockAppDataService{
    getData(id:number){
        return of("Mock Data");
    }
}(
describe("Block 1 Component",()=>{
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [
            Block1Component
          ],
          providers:[
              {provide:AppDataService,useClass:MockAppDataService}
          ]
          
        }).compileComponents();
      }));
    it("should create Block1 Component",()=>{
      const fixture=TestBed.createComponent(Block1Component);
      
      const comp=fixture.componentInstance;

      expect(comp).toBeDefined();  
    });
}));