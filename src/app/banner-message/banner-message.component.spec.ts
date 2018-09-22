import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { BannerMessageComponent } from './banner-message.component';
import { By } from '@angular/platform-browser';
import { by } from 'protractor';

describe('BannerMessageComponent', () => {
  let component: BannerMessageComponent;
  let fixture: ComponentFixture<BannerMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  describe("close button on banner ", () => {

    it("should close banner", fakeAsync( () => {
      fixture.detectChanges();
      spyOn(component, 'closeBanner'); //method attached to the click.
      debugger
      let btn = fixture.debugElement.query(By.css('.close'));
      btn.triggerEventHandler('click', null);
      tick(); // simulates the passage of time until all pending asynchronous activities finish
      fixture.detectChanges();



      expect(component.closeBanner).toHaveBeenCalled();
  }));

  it('flag becomes false on close banner', fakeAsync(() => {

    fixture.detectChanges()


    spyOn(component, 'closeBanner')

    let closebutton = fixture.debugElement.query(By.css(".close"))

    closebutton.triggerEventHandler('click', null);

    tick()

    fixture.detectChanges()

    expect(component.showBanner).toBe(true)
  }))
      
    })
});
