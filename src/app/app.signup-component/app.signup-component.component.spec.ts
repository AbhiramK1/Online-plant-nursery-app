import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSignupComponentComponent } from './app.signup-component.component';

describe('AppSignupComponentComponent', () => {
  let component: AppSignupComponentComponent;
  let fixture: ComponentFixture<AppSignupComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSignupComponentComponent]
    });
    fixture = TestBed.createComponent(AppSignupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
