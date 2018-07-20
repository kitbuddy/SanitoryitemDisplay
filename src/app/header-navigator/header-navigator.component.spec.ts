import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavigatorComponent } from './header-navigator.component';

describe('HeaderNavigatorComponent', () => {
  let component: HeaderNavigatorComponent;
  let fixture: ComponentFixture<HeaderNavigatorComponent>;
  let expectedMessage 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expectedMessage = 'Hello world!'
  });

  fdescribe('test helloWorld', () => {

    it('says hello', () => {
      expect(component.helloWorld()).toBe(expectedMessage)
    })
  }) 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
