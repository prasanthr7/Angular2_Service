import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Component } from './child1.component';

describe('Child1Component', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data from service',()=>{
    component.change_click();
    fixture.detectChanges();
    expect(component.data).toEqual('from child');
  });

  it('should change data when text data changes',()=>{
    component.text_Change("new text");
    fixture.detectChanges();
    expect(component.data).toEqual('new text');
  });
});
