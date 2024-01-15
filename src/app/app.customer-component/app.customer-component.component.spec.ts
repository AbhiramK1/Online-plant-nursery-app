import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomerComponentComponent } from './app.customer-component.component';

describe('AppCustomerComponentComponent', () => {
  let component: AppCustomerComponentComponent;
  let fixture: ComponentFixture<AppCustomerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCustomerComponentComponent]
    });
    fixture = TestBed.createComponent(AppCustomerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
