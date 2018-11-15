import { TestBed, inject } from '@angular/core/testing';

import { DataTestService } from './data-test.service';
import { SessionDataService } from './session-data.service';
class MockSessionDataService{
  clearSessionStorage(){
    console.log("clear called")
}
 public getCookie(cname) {
return "";
 }
}
describe('DataTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTestService,
        {provide:SessionDataService,useClass:MockSessionDataService}]
    });
  });

  it('should be created', inject([DataTestService], (service: DataTestService) => {
    expect(service).toBeTruthy();
  }));

  it('should have Data value when getData called', inject([DataTestService], (service: DataTestService) => {
    expect(service.getData()).toBe("Data");
  }));
});
